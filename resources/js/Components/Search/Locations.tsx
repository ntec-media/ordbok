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
        <div className="mt-2">
            {results.length > 0 && (
                <a
                    onClick={() => setDialogOpen(true)}
                    className="text-blue-500 cursor-pointer "
                    href="#"
                >
                    {results.length === 1
                        ? 'Fant ' + results.length + '. sted'
                        : 'Fant ' + results.length + ' steder'}
                </a>
            )}
            <Dialog
                maxWidth="lg"
                fullWidth
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                className="relative"
            >
                <DialogContent
                    style={{maxHeight: 700, padding: 0}}
                    className="flex justify-between"
                >
                    <div className="flex flex-col w-full m-4">
                        <List
                            className="w-full overflow-y-auto"
                            style={{height: 570}}
                        >
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
                                        updateLocation={(
                                            newLocation: ILocation
                                        ) => setSelected(newLocation)}
                                    />
                                </div>
                            ))}
                        </List>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-0 left-0 p-1 text-xs text-blue-400 cursor-pointer"
                            href="https://kartverket.no"
                        >
                            © Kartverket
                        </a>
                    </div>
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
        </div>
    );
};
