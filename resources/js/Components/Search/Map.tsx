import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {ILocation} from '../../Hooks/useLocationSearch';

export const Map = (props: {location: ILocation}) => {
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

    return (
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
};
