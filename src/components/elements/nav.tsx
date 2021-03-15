import {Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import {Redirect} from 'react-router-dom';
import AppPaths from '../../const/paths';

const createNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const createDrawerStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 250,
    },
  }),
);

type DrawerProps = {
  onRedirected: () => void,
};

const DrawerPanel = (props: DrawerProps) => {
  const drawerStyles = createDrawerStyles();

  const [redirect, setRedirect] = React.useState<string>('');

  if (redirect) {
    props.onRedirected();
    return <Redirect to={redirect}/>;
  }

  return (
    <div className={drawerStyles.list}>
      <List>
        <ListItem button onClick={() => setRedirect(AppPaths.HOME)}>
          <ListItemIcon><InboxIcon/></ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button onClick={() => setRedirect(AppPaths.CALC)}>
          <ListItemIcon><MailIcon/></ListItemIcon>
          <ListItemText primary="Calculator"/>
        </ListItem>
      </List>
    </div>
  );
};

export const Navigation = () => {
  const navStyles = createNavStyles();

  const [opened, setOpened] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpened(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start" className={navStyles.menuButton}
            color="inherit"
            aria-label="menu" onClick={toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={navStyles.title}>
            AutoRack
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Drawer anchor="left" open={opened} onClose={toggleDrawer(false)}>
          <DrawerPanel onRedirected={() => setOpened(false)}/>
        </Drawer>
      </AppBar>
    </>
  );
};
