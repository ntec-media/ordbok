import {Dialog, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';
import {DialogContent, FormControl} from '@material-ui/core';
import React from 'react';
import {useCookies} from 'react-cookie';
import {languagesSupported} from '../../interfaces';
import {trans} from 'matice';

interface Props {
    open: boolean;
    closeModal: () => void;
}

// Unused component. Can be used in a potential v2
const LanguageModal = (props: Props) => {
    const [cookies, setCookies] = useCookies(['lang']);

    return (
        <Dialog open={props.open} onClose={props.closeModal}>
            <DialogContent>
                <FormControl>
                    <RadioGroup
                        value={cookies.lang}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setCookies('lang', event.target.value, {
                                path: '/',
                            });
                            // eslint-disable-next-line no-self-assign
                            window.location.href = window.location.href;
                        }}
                    >
                        {languagesSupported.map(language => (
                            <FormControlLabel
                                key={language.short}
                                value={language.short}
                                control={<Radio />}
                                label={trans(
                                    `Layout.navbar.languages.${language.short}`
                                )}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </DialogContent>
        </Dialog>
    );
};

export default LanguageModal;
