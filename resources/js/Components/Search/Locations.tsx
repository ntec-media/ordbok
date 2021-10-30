import {Dialog, DialogContent, List} from '@material-ui/core';
import React, {useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {ILocation, useLocationSearch} from '../../Hooks/useLocationSearch';
import {LocationCard} from './LocationCard';

export const Locations = (props: {input: string}) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const results = useLocationSearch(props.input);
    const [selected, setSelected] = useState<ILocation>();

    return (
        <>
            {results.length > 0 && (
                <p
                    onClick={() => setDialogOpen(true)}
                    className="pt-2 text-blue-500 cursor-pointer"
                >
                    {'Fant ' + results.length} steder
                </p>
            )}
            <Dialog
                maxWidth="md"
                fullWidth
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            >
                <DialogContent className="flex justify-between">
                    <List className="w-6/12 overflow-y-auto">
                        {results.map(location => (
                            <div key={location.stedsnummer}>
                                <LocationCard
                                    location={location}
                                    updateLocation={(newLocation: ILocation) =>
                                        setSelected(newLocation)
                                    }
                                />
                            </div>
                        ))}
                    </List>
                    <div className="hidden md:block">Map</div>
                </DialogContent>
            </Dialog>
        </>
    );
};
