import {Dialog} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {ILocation} from '../../Hooks/useLocationSearch';

interface Props {
    location: ILocation;
    open: boolean;
    closeModal: () => void;
}

export const Map = (props: Props) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        map &&
            map.flyTo(
                {
                    lat: props.location.representasjonspunkt.nord,
                    lng: props.location.representasjonspunkt.øst,
                },
                13
            );
    }, [props.location]);

    const GetMap = (
        <MapContainer
            center={[
                props.location.representasjonspunkt.nord,
                props.location.representasjonspunkt.øst,
            ]}
            zoom={13}
            scrollWheelZoom={false}
            whenCreated={setMap}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[
                    props.location.representasjonspunkt.nord,
                    props.location.representasjonspunkt.øst,
                ]}
            />
        </MapContainer>
    );

    return (
        <>
            <div className="hidden md:block">{GetMap}</div>
            <div className="md:hidden">
                <Dialog open={props.open} onClose={() => props.closeModal()}>
                    {GetMap}
                </Dialog>
            </div>
        </>
    );
};
