import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    TextField,
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';

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

    useEffect(() => {
        setInput(props.report);
    }, [props.open, props.report]);

    const submit = () => {};

    return (
        <Dialog open={props.open} maxWidth="sm" fullWidth>
            <DialogTitle className="flex justify-center">
                Rapporter feil
            </DialogTitle>
            <DialogContent>
                <FormControl className="flex flex-col w-full space-y-4">
                    <TextField
                        label="Beskrivelse norsk"
                        variant="outlined"
                        color="primary"
                        disabled
                        value={inputs?.norwegian}
                    />
                    <TextField
                        label="Beskrivelse samisk"
                        variant="outlined"
                        color="primary"
                        disabled
                        value={inputs?.sami}
                    />
                    <TextField
                        multiline
                        variant="outlined"
                        rows="10"
                        label="Beskrivelse av feil"
                    />
                </FormControl>
            </DialogContent>
            <DialogActions style={{justifyContent: 'center'}}>
                <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => props.closeModal()}
                >
                    Avbryt
                </Button>
                <Button color="primary" variant="contained" onClick={submit}>
                    Send inn
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ReportErrorModal;
