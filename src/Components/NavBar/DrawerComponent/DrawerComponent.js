import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const DrawerComponent = () => {
    const useStyles = makeStyles(theme => ({
        drawerContainer: {},
        iconButtonContainer: {
          marginLeft: 'auto',
          color: 'white',
        },
    
        menuIconToggle: {
          fontSize: '3rem',
        },
      }));

    const [openDrawer, setOpenDrawer] = useState(false);

    const classes = useStyles();

    return (
        <>
        <Drawer anchor='right'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
            <List>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            Courses
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            Fees
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            Parents Accounts
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            Holidays
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            Teachers Account
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem button divider onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            Openings
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        <IconButton className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
            <MenuIcon className={classes.menuIconToggle}/>
        </IconButton>
        </>
    )
}

export default DrawerComponent
