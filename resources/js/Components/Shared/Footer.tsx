import {trans} from 'matice';
import React from 'react';

const Footer = () => {
    return (
        <div className="z-50 hidden bg-white border-t border-gray-300 shadow sm:block">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between py-6 text-gray-400 text-opacity-80">
                    <div className="flex-1">
                        <p className="inline text-opacity-60">
                            © Ntec Media AS
                        </p>
                        <p className="inline text-opacity-60"> og Divvun</p>
                    </div>
                    <p className=" w-96">{trans('Layout.footer.content')}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
