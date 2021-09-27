import React, {useState} from 'react';
import {ILang} from '../../interfaces';
import {
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import {useEffect} from 'react';

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
            <DialogTitle className="font-bold text-white bg-blue-800">
                {props.title}
            </DialogTitle>
            <DialogContent style={{padding: 0}}>
                <List>
                    {selected.map(item => (
                        <ListItem
                            key={item.short}
                            dense
                            button
                            onClick={() =>
                                setSelected(
                                    selected.map(s =>
                                        s.short === item.short
                                            ? {...s, selected: !s.selected}
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
            <div className="py-4 text-center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.closeModal(selected)}
                >
                    Bekreft
                </Button>
            </div>
        </Dialog>
    );
};

export default MultipleSelectModal;
