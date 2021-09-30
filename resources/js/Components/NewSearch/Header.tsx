import React from 'react';
// Icons
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import GetAppIcon from '@material-ui/icons/GetApp';
import {InertiaLink} from '@inertiajs/inertia-react';

const Header = () => {
    return (
        <div className="mt-20">
            <ul className="flex justify-center space-x-12">
                <li className="relative flex flex-col items-center justify-center">
                    <InertiaLink
                        className="bg-blue-500 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-700"
                        href="/"
                    >
                        <SearchIcon
                            className="py-4 text-white"
                            style={{width: 64, height: 64}}
                        />
                    </InertiaLink>
                    <p className="mt-1">Søk</p>
                </li>
                <li className="relative flex flex-col items-center justify-center">
                    <InertiaLink
                        className="bg-blue-500 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-700"
                        href="/"
                    >
                        <PostAddIcon
                            className="py-4 text-white"
                            style={{width: 64, height: 64}}
                        />
                    </InertiaLink>
                    <p className="mt-1">Nytt ord</p>
                </li>
                <li className="relative flex flex-col items-center justify-center">
                    <InertiaLink
                        className="bg-blue-500 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-700"
                        href="/"
                    >
                        <BarChartIcon
                            className="py-4 text-white"
                            style={{width: 64, height: 64}}
                        />
                    </InertiaLink>
                    <p className="mt-1">Statistikk</p>
                </li>
                <li className="relative flex flex-col items-center justify-center">
                    <InertiaLink
                        className="bg-blue-500 rounded-full shadow-2xl cursor-pointer icon-link hover:bg-blue-700"
                        href="/"
                    >
                        <GetAppIcon
                            className="py-4 text-white"
                            style={{width: 64, height: 64}}
                        />
                    </InertiaLink>
                    <p className="mt-1">Last ned app</p>
                </li>
            </ul>
        </div>
    );
};

export default Header;
