import {trans} from 'matice';
import React from 'react';
import Layout from '../Components/Shared/Layout';

const content = (
    <div className="flex flex-col items-center mt-10 space-y-8 md:flex-row md:mt-20 md:justify-center md:space-x-16 md:space-y-0">
        <a
            className="w-2/3 md:w-2/6"
            href="https://apps.apple.com/no/app/julevb%C3%A1go/id878913855"
            target="_blank"
        >
            <img
                className="w-full"
                src="https://f2f.fourlis.net/public/ios/ios_app.png"
                alt="apple logo"
            />
        </a>
        <a
            className="w-2/3 md:w-2/6"
            href="https://play.google.com/store/apps/details?id=no.ntec.julevbago"
            target="_blank"
        >
            <img
                className="w-full"
                src="data:image/png;base64,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"
                alt="google play logo"
            />
        </a>
    </div>
);

const App = () => (
    <>
        <div className="md:hidden fadeIn">
            <Layout>
                <div className="flex flex-row justify-around mt-10 md:mt-20">
                    <div className="flex flex-col justify-center w-11/12 text-center md:w-3/6">
                        <h1 className="text-xl text-blue-600 lg:text-3xl">
                            {trans('App.header')}
                        </h1>
                    </div>
                </div>
                {content}
            </Layout>
        </div>
        <div className="hidden min-h-screen md:block fadeIn">
            <div className="flex flex-row justify-around mt-4 md:mt-20">
                <div className="flex flex-col justify-center w-11/12 text-center md:w-4/6">
                    <h1 className="text-3xl text-blue-600 lg:text-3xl">
                        {trans('App.header')}
                    </h1>
                </div>
            </div>
            {content}
        </div>
    </>
);

export default App;
