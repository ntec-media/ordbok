import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
} from '@material-ui/core';
import React from 'react';
// Icons
import AboutIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import GetAppIcon from '@material-ui/icons/GetApp';
import {InertiaLink} from '@inertiajs/inertia-react';
// Image
import samiFlag from '../../../images/sami_flag.png';
import {trans} from 'matice';

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
                        <h1 className="text-xl font-bold">Julevbágo</h1>
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
                        <ListItemText primary={trans('Layout.navbar.search')} />
                    </ListItem>
                </InertiaLink>

                <InertiaLink href="/word">
                    <ListItem button key="word">
                        <ListItemIcon>
                            <PostAddIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={trans('Layout.navbar.wordSuggestion')}
                        />
                    </ListItem>
                </InertiaLink>

                <InertiaLink href="/statistics">
                    <ListItem button key="statistics">
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={trans('Layout.navbar.statistics')}
                        />
                    </ListItem>
                </InertiaLink>

                <InertiaLink href="/app">
                    <ListItem button key="download app">
                        <ListItemIcon>
                            <GetAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={trans('Layout.navbar.app')} />
                    </ListItem>
                </InertiaLink>
            </List>
            <Divider />
            <List>
                <InertiaLink href="/about">
                    <ListItem button key="about">
                        <ListItemIcon>
                            <AboutIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={trans('Layout.navbar.about_us')}
                        />
                    </ListItem>
                </InertiaLink>
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <SwipeableDrawer
                    onClose={props.toggle}
                    onOpen={props.toggle}
                    anchor="left"
                    open={props.open}
                >
                    {list()}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
};

export default Sidebar;
