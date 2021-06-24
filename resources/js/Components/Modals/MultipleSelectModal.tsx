import React, { useState } from "react";
import { ILang } from "../../interfaces";
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
import { useEffect } from "react";

interface Props {
    open: boolean;
    closeModal: (items: ILang[]) => void;
    items: ILang[];
    title: string;
}

const MultipleSelectModal = (props: Props) => {
    const [selected, setSelected] = useState<ILang[]>([]);

    useEffect(() => {
        props.open && setSelected(props.items);
    }, [props.open]);

    return (
        <Dialog open={props.open} onClose={() => props.closeModal(selected)}>
            <DialogTitle>Velg språk for oversettelse</DialogTitle>
            <DialogContent style={{ padding: 0 }}>
                <List>
                    {selected.map((item) => (
                        <ListItem
                            key={item.short}
                            dense
                            button
                            onClick={() =>
                                setSelected(
                                    selected.map((s) =>
                                        s.short === item.short
                                            ? { ...s, selected: !s.selected }
                                            : s
                                    )
                                )
                            }
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={item.selected}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={item.short} primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default MultipleSelectModal;
