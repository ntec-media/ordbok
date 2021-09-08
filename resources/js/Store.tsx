import React from 'react';
import {useCookies} from 'react-cookie';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context = React.createContext({} as any);

const Store = (props: {children: JSX.Element | JSX.Element[]}) => {
    const [cookies, setCookies] = useCookies(['translang', 'dicts', 'lang']);

    return (
        <Context.Provider value={[cookies, setCookies]}>
            {props.children}
        </Context.Provider>
    );
};

export default Store;
