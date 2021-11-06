import React from 'react';
// Icons
import PostAddIcon from '@material-ui/icons/PostAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import GetAppIcon from '@material-ui/icons/GetApp';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    selected?: number;
    setSelected: (newSelected: number) => void;
}

const Menu = (props: Props) => {
    return (
        <ul className="justify-center hidden space-x-12 md:flex">
            <li
                className="relative flex flex-col items-center justify-center"
                onClick={() => props.setSelected(0)}
            >
                <div className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600">
                    <SearchIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1 cursor-pointer select-none">Søk</p>
            </li>

            <li
                className="relative flex flex-col items-center justify-center"
                onClick={() => props.setSelected(1)}
            >
                <div className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600">
                    <PostAddIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1 cursor-pointer select-none">Nytt ord</p>
            </li>
            <li
                className="relative flex flex-col items-center justify-center"
                onClick={() => props.setSelected(2)}
            >
                <div className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600">
                    <BarChartIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1 cursor-pointer select-none">Statistikk</p>
            </li>
            <li
                className="relative flex flex-col items-center justify-center"
                onClick={() => props.setSelected(3)}
            >
                <div className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600">
                    <GetAppIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1 cursor-pointer select-none">Last ned app</p>
            </li>
        </ul>
    );
};

export default Menu;
