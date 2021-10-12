import React, {useContext, useEffect, useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import {Context} from '../../Store';
import {localDictsSupported} from '../../interfaces';
import {setLocale} from 'matice';
import LanguageDropDown from './LanguageDropDown';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [path, setPath] = useState('');
    const [cookies, setCookies] = useContext(Context);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!cookies.lang) {
            setCookies('lang', 'nb', {path: '/'});
        } else setLocale(cookies.lang);
        if (!cookies.dicts) {
            setCookies('dicts', localDictsSupported, {path: '/'});
        }
        setPath(window.location.pathname);
    }, []);

    const updateLang = (newLang: string) => {
        setCookies('lang', newLang, {path: '/'});
        setLocale('en');
        window.location.href = path;
    };

    return (
        <div>
            <div className="flex items-center justify-between w-full py-2 lg:mx-2">
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
                <div>
                    <LanguageDropDown
                        selected={cookies.lang}
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
