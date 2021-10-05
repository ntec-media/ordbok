import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import React from 'react';
// Icons
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import GetAppIcon from '@material-ui/icons/GetApp';
import {InertiaLink} from '@inertiajs/inertia-react';
// Image
import samiFlag from '../../../images/sami_flag.png';

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
                <ListItem>
                    <InertiaLink href="/">
                        <ListItemIcon>
                            <img
                                src={samiFlag}
                                alt="sami flag"
                                className="w-6 h-6 rounded-full"
                            />
                        </ListItemIcon>
                    </InertiaLink>
                    <h1 className="text-xl font-bold">Julevbago</h1>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="search">
                    <InertiaLink href="/">
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                    </InertiaLink>
                    <ListItemText primary="Søk" />
                </ListItem>

                <ListItem button key="word">
                    <InertiaLink href="/word">
                        <ListItemIcon>
                            <PostAddIcon />
                        </ListItemIcon>
                    </InertiaLink>
                    <ListItemText primary="Nytt ord forslag" />
                </ListItem>

                <ListItem button key="statistics">
                    <InertiaLink href="/statistics">
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                    </InertiaLink>
                    <ListItemText primary="Statistikk" />
                </ListItem>

                <ListItem button key="download app">
                    <InertiaLink href="/app">
                        <ListItemIcon>
                            <GetAppIcon />
                        </ListItemIcon>
                    </InertiaLink>
                    <ListItemText primary="Statistikk" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <InertiaLink href="/about">
                    <ListItem button key="about">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Om appen" />
                    </ListItem>
                </InertiaLink>
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
