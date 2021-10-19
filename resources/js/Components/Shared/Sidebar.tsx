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
                <InertiaLink href="/">
                    <ListItem>
                        <ListItemIcon>
                            <img
                                src={samiFlag}
                                alt="sami flag"
                                className="w-6 h-6 rounded-full"
                            />
                        </ListItemIcon>
                        <h1 className="text-xl font-bold">Julevbago</h1>
                    </ListItem>
                </InertiaLink>
            </List>
            <Divider />
            <List>
                <InertiaLink href="/">
                    <ListItem button key="search">
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Søk" />
                    </ListItem>
                </InertiaLink>

                <InertiaLink href="/word">
                    <ListItem button key="word">
                        <ListItemIcon>
                            <PostAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nytt ord forslag" />
                    </ListItem>
                </InertiaLink>

                <InertiaLink href="/statistics">
                    <ListItem button key="statistics">
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Statistikk" />
                    </ListItem>
                </InertiaLink>

                <InertiaLink href="/app">
                    <ListItem button key="download app">
                        <ListItemIcon>
                            <GetAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Last ned app" />
                    </ListItem>
                </InertiaLink>
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
