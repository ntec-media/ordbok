import {IconButton, Tooltip} from '@material-ui/core';
import React, {useState} from 'react';
import ISearchResult from '../../Interfaces/ISearchResult';
import FlagIcon from '@material-ui/icons/Flag';
import ReportErrorModal from '../Modals/ReportErrorModal';

interface Props {
    input: string;
    result: ISearchResult;
}

const ResultCard = (props: Props) => {
    const [errorModal, setErrorModal] = useState(false);

    function getTextWithHgihtligh(text: string) {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${props.input})`, 'gi'));
        return (
            <span>
                {parts.map(part =>
                    part.toLowerCase() === props.input.toLowerCase() ? (
                        <span className="bg-yellow-200">{part}</span>
                    ) : (
                        part
                    )
                )}
            </span>
        );
    }

    return (
        <>
            <div className="flex-col w-full p-4 border border-indigo-200 rounded-lg shadow-md bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
                <div className="flex justify-between w-full mb-6">
                    <p className="font-semibold">
                        {getTextWithHgihtligh(props.result.fra)}
                    </p>
                    <p className="italic font-bold text-blue-600">
                        {props.result.kredittering}
                    </p>
                </div>
                <div className="flex justify-between w-full mb-6">
                    {getTextWithHgihtligh(props.result.til)}
                    <Tooltip title="Raporter feil">
                        <IconButton onClick={() => setErrorModal(true)}>
                            <FlagIcon
                                fontSize="small"
                                className="text-red-500"
                            />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <ReportErrorModal
                open={errorModal}
                closeModal={() => setErrorModal(false)}
                report={{norwegian: props.result.fra, sami: props.result.til}}
            />
        </>
    );
};

export default ResultCard;
