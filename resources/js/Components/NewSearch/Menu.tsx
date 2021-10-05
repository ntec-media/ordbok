import React from 'react';
// Icons
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import GetAppIcon from '@material-ui/icons/GetApp';

interface Props {
    content: number;
    setContent: (newContent: number) => void;
}

const Menu = (props: Props) => {
    return (
        <ul className="flex justify-center space-x-12">
            <li className="relative flex flex-col items-center justify-center">
                <div
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    onClick={() => props.setContent(0)}
                >
                    <SearchIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1">Søk</p>
            </li>
            <li className="relative flex flex-col items-center justify-center">
                <div
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    onClick={() => props.setContent(1)}
                >
                    <PostAddIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1">Nytt ord</p>
            </li>
            <li className="relative flex flex-col items-center justify-center">
                <div
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    onClick={() => props.setContent(2)}
                >
                    <BarChartIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1">Statistikk</p>
            </li>
            <li className="relative flex flex-col items-center justify-center">
                <div
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    onClick={() => props.setContent(3)}
                >
                    <GetAppIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </div>
                <p className="mt-1">Last ned app</p>
            </li>
        </ul>
    );
};

export default Menu;
