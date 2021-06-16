import {
    Dialog,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import { DialogContent, DialogTitle, FormControl } from "@material-ui/core";
import React from "react";
import { useCookies } from "react-cookie";
import { languagesSupported } from "../../interfaces";

interface Props {
    open: boolean;
    closeModal: () => void;
}

const LanguageModal = (props: Props) => {
    const [cookies, setCookies] = useCookies(["lang"]);

    return (
        <Dialog open={props.open} onClose={props.closeModal}>
            <DialogContent>
                <FormControl>
                    <RadioGroup
                        value={cookies.lang}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setCookies("lang", event.target.value, {
                                path: "/",
                            });
                            props.closeModal();
                        }}
                    >
                        {languagesSupported.map((language) => (
                            <FormControlLabel
                                key={language.short}
                                value={language.short}
                                control={<Radio />}
                                label={language.name}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </DialogContent>
        </Dialog>
    );
};

export default LanguageModal;
