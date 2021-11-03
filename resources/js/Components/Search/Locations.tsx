import {Dialog, DialogContent, List} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {ILocation, useLocationSearch} from '../../Hooks/useLocationSearch';
import {LocationCard} from './LocationCard';
import {Map} from './Map';

export const Locations = (props: {input: string}) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const results = useLocationSearch(props.input);
    const [selected, setSelected] = useState<ILocation>();
    const [mapDialogOpen, setMapDialogOpen] = useState(false);

    useEffect(() => {
        setSelected(results[0]);
    }, [results]);

    const handleClick = (location: ILocation) => {
        setSelected(location);
        if (window.innerWidth < 768) setMapDialogOpen(true);
    };

    return (
        <>
            {results.length > 0 && (
                <p
                    onClick={() => setDialogOpen(true)}
                    className="pt-2 text-blue-500 cursor-pointer"
                >
                    {results.length === 1
                        ? 'Fant ' + results.length + '. sted'
                        : 'Fant ' + results.length + ' steder'}
                </p>
            )}
            <Dialog
                maxWidth="lg"
                fullWidth
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            >
                <DialogContent
                    style={{maxHeight: 700}}
                    className="flex justify-between"
                >
                    <List className="w-full overflow-y-auto md:w-6/12">
                        {results.map(location => (
                            <div
                                key={location.stedsnummer}
                                onClick={() => handleClick(location)}
                            >
                                <LocationCard
                                    selected={
                                        location.stedsnummer ===
                                        selected?.stedsnummer
                                    }
                                    location={location}
                                    updateLocation={(newLocation: ILocation) =>
                                        setSelected(newLocation)
                                    }
                                />
                            </div>
                        ))}
                    </List>
                    <div className="hidden md:block">
                        {selected && (
                            <Map
                                open={mapDialogOpen}
                                closeModal={() => setMapDialogOpen(false)}
                                location={selected}
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
