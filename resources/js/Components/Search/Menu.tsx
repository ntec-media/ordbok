import React from 'react';
// Icons
import PostAddIcon from '@material-ui/icons/PostAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import GetAppIcon from '@material-ui/icons/GetApp';
import {InertiaLink} from '@inertiajs/inertia-react';

const Menu = () => {
    return (
        <ul className="flex justify-center space-x-12">
            <li className="relative flex flex-col items-center justify-center">
                <InertiaLink
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    href="/word"
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
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    href="/statistics"
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
                    className="bg-blue-500 rounded-full shadow-md cursor-pointer icon-link hover:bg-blue-600"
                    href="/app"
                >
                    <GetAppIcon
                        className="py-4 text-white"
                        style={{width: 64, height: 64}}
                    />
                </InertiaLink>
                <p className="mt-1">Last ned app</p>
            </li>
        </ul>
    );
};

export default Menu;
