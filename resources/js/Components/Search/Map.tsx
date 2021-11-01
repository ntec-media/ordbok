import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

export const Map = (pos: {nord: number; øst: number}) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        map && map.flyTo({lat: pos.nord, lng: pos.øst}, 13);
    }, [pos]);

    return (
        <MapContainer
            center={[pos.nord, pos.øst]}
            zoom={13}
            scrollWheelZoom={false}
            whenCreated={setMap}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[pos.nord, pos.øst]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};
