import React from "react";
import Layout from "./Layout";
// import CheckIcon from "@material-ui/icons/Check";
import {
    CheckCircleIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/outline";

const App = () => {
    return (
        <Layout>
            <div className="relative h-full overflow-y-auto">
                <div className="justify-center hidden pt-2 lg:flex md:pt-20 lg:pt-36">
                    <h3 className="m-2 text-3xl text-center text-gray-600">
                        Julev er tilgjenglig for nedlastning på Android og iOS
                    </h3>
                </div>
                <div className="flex justify-center m-4 sm:m-6 md:m-10">
                    <img
                        className="w-32 h-72 sm:h-96 sm:w-48 lg:w-auto md:h-auto"
                        src="https://www.mainfreight.com/getmedia/c50048a6-d73d-4cb9-82b7-6befbda53ebe/MF-mobile-app.png?width=226&height=500"
                        alt="app"
                    />
                </div>
                <div className="flex justify-center">
                    <ul className="flex flex-col justify-around h-48 mb-8">
                        <li className="flex flex-row items-center italic text-md md:text-xl">
                            <CheckCircleIcon className="w-8 h-8 mr-6 text-green-500" />
                            Enkelt ordsøk mellom lulesamisk og norsk
                        </li>
                        <li className="flex flex-row items-center text-sm italic text-gray-500 opacity-50 md:text-xl">
                            <ChevronDoubleRightIcon className="w-8 h-8 mr-6 text-blue-600" />
                            Mulighet for søk offline
                        </li>
                        <li className="flex flex-row items-center text-sm italic text-gray-500 opacity-50 md:text-xl">
                            <ChevronDoubleRightIcon className="w-8 h-8 mr-6 text-blue-600" />
                            Mulighet for å sende forslag til nye ord til Divvun
                        </li>
                        <li className="flex flex-row items-center text-sm italic text-gray-500 opacity-50 md:text-xl">
                            <ChevronDoubleRightIcon className="w-8 h-8 mr-6 text-blue-600" />
                            Støtte for flere samiske språk
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center m-4">
                    <img
                        className="mx-4 cursor-pointer w-36 h-14 sm:w-48 sm:h-18 lg:w-64 lg:h-24"
                        src="https://f2f.fourlis.net/public/ios/ios_app.png"
                        alt="ios download"
                    />
                    <img
                        className="mx-4 cursor-pointer w-36 h-14 sm:w-48 sm:h-18 lg:w-64 lg:h-24"
                        src="data:image/png;base64,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"
                        alt="android download"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default App;
