import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    TextField,
} from '@material-ui/core';
import axios from 'axios';
import {trans} from 'matice';
import React, {useEffect, useState} from 'react';
import CustomSnackbar, {CustomSnackbarProps} from '../Shared/CustomSnackbar';

interface ErrorReport {
    norwegian: string;
    sami: string;
    description?: string;
}

interface Props {
    open: boolean;
    closeModal: () => void;
    report: ErrorReport;
}

const ReportErrorModal = (props: Props) => {
    const [inputs, setInput] = useState<ErrorReport>();
    const [snackbarProps, setSnackbarProps] = useState<CustomSnackbarProps>({
        type: 'success',
        open: false,
        message: 'Melding sendt! Takk for tilbakemelding.',
        handleClose: () => setSnackbarProps({...snackbarProps, open: false}),
    });

    useEffect(() => {
        setInput(props.report);
    }, [props.open, props.report]);

    const submit = async () => {
        return await axios
            .post('/api/error', {
                from: inputs?.norwegian,
                to: inputs?.sami,
                description: inputs?.description,
            })
            .then(res => {
                if (res.status === 200) {
                    setSnackbarProps({...snackbarProps, open: true});
                    props.closeModal();
                }
            });
    };

    return (
        <>
            <Dialog open={props.open} maxWidth="sm" fullWidth>
                <DialogTitle className="flex justify-center">
                    {trans('Search.reportDialog.header')}
                </DialogTitle>
                <DialogContent>
                    <FormControl className="flex flex-col w-full space-y-4">
                        <TextField
                            label={trans('Search.reportDialog.from')}
                            variant="outlined"
                            color="primary"
                            disabled
                            value={inputs?.norwegian}
                        />
                        <TextField
                            label={trans('Search.reportDialog.to')}
                            variant="outlined"
                            color="primary"
                            disabled
                            value={inputs?.sami}
                        />
                        <TextField
                            multiline
                            variant="outlined"
                            rows="10"
                            label={trans('Search.reportDialog.description')}
                            value={inputs?.description}
                            onChange={e =>
                                setInput({
                                    ...inputs!,
                                    description: e.target.value,
                                })
                            }
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center'}}>
                    <Button
                        color="secondary"
                        variant="outlined"
                        onClick={() => props.closeModal()}
                    >
                        {trans('Search.reportDialog.cancel')}
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={submit}
                    >
                        {trans('Search.reportDialog.submit')}
                    </Button>
                </DialogActions>
            </Dialog>
            <CustomSnackbar {...snackbarProps} />
        </>
    );
};

export default ReportErrorModal;
