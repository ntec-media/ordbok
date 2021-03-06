import {IconButton, Tooltip} from '@material-ui/core';
import React, {useState} from 'react';
import ISearchResult from '../../Interfaces/ISearchResult';
import FlagIcon from '@material-ui/icons/Flag';
import ReportErrorModal from '../Modals/ReportErrorModal';
import {trans} from 'matice';

interface Props {
    input: string;
    result: ISearchResult;
}

const escapeRE = new RegExp(/([.*+?^=!:$(){}|[\]/\\])/g);
const safeRE = (string: string) => {
    return string.toLocaleLowerCase().replace(escapeRE, '\\$1');
};

const ResultCard = (props: Props) => {
    const [showAll, setShowAll] = useState(false);

    const getFormattedString = (string: string) => {
        const minItemsToShow = 5;
        let newLines = string.toLocaleLowerCase().split(';');
        let sliced = false;
        if (!showAll) {
            if (newLines.length > minItemsToShow) sliced = true;
            newLines = newLines.slice(0, minItemsToShow);
        }

        return newLines.map((word, index) => {
            return (
                <div key={index}>
                    {newLines.length === 1 ? (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: word.replace(
                                    safeRE(props.input),
                                    `<span class="bg-yellow-200">${props.input}</span>`
                                ),
                            }}
                        />
                    ) : (
                        <p
                            dangerouslySetInnerHTML={{
                                __html:
                                    word.replace(
                                        safeRE(props.input),
                                        `<span class="bg-yellow-200">${props.input}</span>`
                                    ) + ';',
                            }}
                        />
                    )}
                    {sliced && index === minItemsToShow - 1 && (
                        <p
                            onClick={() => setShowAll(true)}
                            className="text-blue-500 cursor-pointer"
                        >
                            {trans('Search.SearchResult.showMore')}
                        </p>
                    )}
                </div>
            );
        });
    };

    const Report = () => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Tooltip title="Raporter feil">
                    <IconButton onClick={() => setOpen(true)}>
                        <FlagIcon
                            fontSize="small"
                            className="text-gray-400 hover:text-red-400"
                        />
                    </IconButton>
                </Tooltip>

                <ReportErrorModal
                    open={open}
                    closeModal={() => setOpen(false)}
                    report={{
                        norwegian: props.result.fra,
                        sami: props.result.til,
                    }}
                />
            </>
        );
    };

    return (
        <>
            <div className="flex-col w-full p-4 mb-1 border border-indigo-200 rounded-md shadow-md bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
                <div className="flex justify-between w-full mb-6">
                    <div className="font-bold">
                        {getFormattedString(props.result.fra)}
                    </div>
                    <p className="italic font-bold text-blue-600">
                        {props.result.kredittering}
                    </p>
                </div>
                <div className="flex justify-between">
                    <div>{getFormattedString(props.result.til)}</div>
                    <div className="self-end">
                        <Report />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultCard;
