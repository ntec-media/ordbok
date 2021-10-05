import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

interface Props {
    open: boolean;
    toggle: () => void;
}

const Sidebar = (props: Props) => {
    const list = () => (
        <div
            role="presentation"
            onClick={props.toggle}
            onKeyDown={() => props.toggle}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <Drawer onClose={props.toggle} anchor="left" open={props.open}>
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default Sidebar;
