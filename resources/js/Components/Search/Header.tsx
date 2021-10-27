import React from 'react';

const Header = (props: {searching: boolean}) => {
    return (
        <>
            <div
                className={
                    props.searching
                        ? 'flex items-center justify-center w-full h-0 md:hidden'
                        : 'flex items-center justify-center w-full h-24 md:hidden'
                }
            >
                <div className="absolute top-0">
                    <h1
                        className={
                            props.searching
                                ? 'mt-3.5 text-3xl'
                                : 'mt-20 text-5xl'
                        }
                    >
                        Julevbágo
                    </h1>
                </div>
            </div>
            <div className="justify-center hidden py-12 text-5xl md:flex 2xl:text-7xl">
                Julevbágo
            </div>
        </>
    );
};

export default Header;
