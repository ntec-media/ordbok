import React, {useContext, useEffect, useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import {setLocale} from 'matice';
import LanguageDropDown from './LanguageDropDown';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [path, setPath] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        lang ? setLocale(lang) : localStorage.setItem('lang', 'nb');

        setPath(window.location.pathname);
    }, []);

    const updateLang = (newLang: string) => {
        localStorage.setItem('lang', newLang);
        setLocale('newLang');
        window.location.href = path;
    };

    return (
        <div>
            <div className="flex items-center justify-between w-full py-1 lg:mx-2">
                <div>
                    <div className="flex md:hidden">
                        <IconButton
                            onClick={() => setSidebarOpen(true)}
                            className=""
                        >
                            <MenuIcon
                                fontSize="large"
                                className="text-blue-500"
                            />
                        </IconButton>
                    </div>
                </div>
                {path !== '/' && <h1 className="text-3xl">Julevbago</h1>}
                <div>
                    <LanguageDropDown
                        selected={localStorage.getItem('lang') || 'no'}
                        setSelected={newLang => updateLang(newLang)}
                    />
                </div>
            </div>
            <div>
                <Sidebar
                    open={sidebarOpen}
                    toggle={() => setSidebarOpen(!sidebarOpen)}
                />
            </div>
        </div>
    );
};

export default Navbar;
