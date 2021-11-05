import React from 'react';
import {ILocation} from '../../Hooks/useLocationSearch';

interface Props {
    location: ILocation;
    updateLocation: (newLocation: ILocation) => void;
    selected: boolean;
}

export const LocationCard = (props: Props) => {
    return (
        <div
            key={props.location.stedsnummer}
            className={
                props.selected
                    ? 'my-1 p-2 border shadow-md border-black rounded-md cursor-pointer bg-gray-200'
                    : 'my-1 p-2 border shadow-md border-black rounded-md cursor-pointer hover:bg-gray-200'
            }
        >
            <div className="flex justify-between w-full my-2">
                <h2 className="text-lg bold">
                    {props.location.navneobjekttype}
                </h2>
                <h2 className="text-lg bold">
                    {props.location.kommuner[0]?.kommunenavn}
                </h2>
            </div>
            <div>
                {props.location.stedsnavn.map((navn, index) => (
                    <p key={index}>
                        {navn.språk} - <span>{navn.skrivemåte}</span>
                    </p>
                ))}
            </div>
        </div>
    );
};
