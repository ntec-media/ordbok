import {
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { ILang, translateLanguagesSupported } from "../../interfaces";

interface Props {
    open: boolean;
    closeModal: () => void;
}

const TranslateLanguageModal = (props: Props) => {
    const [cookies, setCookies] = useCookies(["translang"]);
    const [selected, setSelected] = useState<ILang[]>([]);

    useEffect(() => {
        const translang = cookies.translang;
        setSelected(translang || translateLanguagesSupported);
    }, [open]);

    const updateCookie = () => {
        setCookies("translang", JSON.stringify(selected), { path: "/" });
        props.closeModal();
    };

    return (
        <Dialog open={props.open} onClose={updateCookie}>
            <DialogTitle>Velg språk for oversettelse</DialogTitle>
            <DialogContent style={{ padding: 0 }}>
                <List>
                    {selected.map((lang) => (
                        <ListItem
                            key={lang.short}
                            dense
                            button
                            onClick={() =>
                                setSelected(
                                    selected.map((s) =>
                                        s.short === lang.short
                                            ? { ...s, selected: !s.selected }
                                            : s
                                    )
                                )
                            }
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={lang.selected}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={lang.short} primary={lang.name} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default TranslateLanguageModal;
