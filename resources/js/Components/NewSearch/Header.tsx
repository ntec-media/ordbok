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

const Header = (props: Props) => {
    return (
        <div className="mt-28">
            <div className="flex justify-center py-20 text-7xl">
                <h1 className="font-bold text-blue-800">J</h1>
                <h1 className="font-bold text-red-700">u</h1>
                <h1 className="font-bold text-yellow-400">l</h1>
                <h1 className="font-bold text-blue-800">e</h1>
                <h1 className="font-bold text-red-700">v</h1>
                <h1 className="font-bold text-green-700">b</h1>
                <h1 className="font-bold text-yellow-400">á</h1>
                <h1 className="font-bold text-blue-800">g</h1>
                <h1 className="font-bold text-red-700 ">o</h1>
            </div>
            <ul className="flex justify-center space-x-12">
                <li className="relative flex flex-col items-center justify-center">
                    <div
                        className="bg-blue-700 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-800"
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
                        className="bg-blue-700 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-800"
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
                        className="bg-blue-700 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-800"
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
                        className="bg-blue-700 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-800"
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
        </div>
    );
};

export default Header;
