import React, {useState} from 'react';
import CustomSnackbar, {
    CustomSnackbarProps,
} from '../Components/Shared/CustomSnackbar';
import Description from '../Components/WordSuggestion/Description';
import Form from '../Components/WordSuggestion/Form';
import {trans} from 'matice';
import InfoIcon from '../Components/WordSuggestion/InfoIcon';
import Layout from '../Components/Shared/Layout';

const WordSuggestion = () => {
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        type: 'success',
        open: false,
        message: 'Ordet er lagret!',
        handleClose: () => setSnackbarProps({...snackbarProps, open: false}),
    });

    const displayResponse = (status: number) => {
        switch (status) {
            case 201:
                setSnackbarProps({
                    ...snackbarProps,
                    type: 'success',
                    open: true,
                    message: trans('WordSuggestion.success'),
                });
                break;
            case 200:
                setSnackbarProps({
                    ...snackbarProps,
                    type: 'warning',
                    open: true,
                    message: trans('WordSuggestion.warning'),
                });
                break;
            default:
                setSnackbarProps({
                    ...snackbarProps,
                    type: 'error',
                    open: true,
                    message: trans('WordSuggestion.error'),
                });
                break;
        }
    };

    const content = (
        <div className="md:min-h-screen">
            <div className="flex justify-center mb-12 ">
                <div className="flex w-full md:border md:border-blue-200 md:w-8/12 md:py-8 md:mt-16 rounded-xl">
                    <div className="w-full md:w-8/12">
                        <h1 className="hidden ml-2 text-3xl text-blue-600 md:flex md:ml-8 ">
                            {trans('WordSuggestion.header')}
                        </h1>
                        <div className="flex items-center justify-between md:hidden">
                            <InfoIcon />
                        </div>
                        <Form result={status => displayResponse(status)} />
                    </div>
                    <div className="hidden w-4/12 p-4 mt-16 md:block">
                        <Description />
                    </div>
                </div>
            </div>
            <CustomSnackbar {...snackbarProps} />
        </div>
    );

    return (
        <>
            <div className="md:hidden fadeIn">
                <Layout>{content}</Layout>
            </div>
            <div className="hidden md:block fadeIn">{content}</div>
        </>
    );
};

export default WordSuggestion;
