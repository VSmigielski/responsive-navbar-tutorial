import React, { useState } from 'react'
import { AppBar, Button, makeStyles, Menu, MenuItem, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { GiBookAura } from 'react-icons/gi'
import { FiBookOpen } from 'react-icons/fi'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { BsFillPersonPlusFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { ImHappy } from 'react-icons/im'
import DrawerComponent from './DrawerComponent/DrawerComponent'


const useStyles = makeStyles(theme => ({
    logo: {
      fontSize: '1.9rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
      },
    },
    account: {
      marginLeft: 'auto',
      '&:hover': {
        background: 'purple',
      },
    },
    tabsContainer: {
      marginLeft: 'auto',
    },
    iconLogo: {
      color: 'yellow',
      fontSize: '3rem',
    },
    icons: {
      fontSize: '1.4rem',
    },
  }));

const NavBar = () => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles();

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    }

    // Breakpoints
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AppBar color='primary'>
                <Toolbar>
                    <Typography>
                        <GiBookAura className={classes.iconLogo}/>
                    </Typography>

                    {isMatch ? <DrawerComponent></DrawerComponent> : 
                    (<>
                        <Tabs className={classes.tabsContainer} onChange={handleClickTab} indicatorColor='secondary' value={value}>
                        <Tab disableRipple  label='Courses' icon={<FiBookOpen className={classes.icons}/>}/>
                        <Tab disableRipple label='Fees' icon={<RiMoneyPoundCircleLine className={classes.icons}/>}/>
                        <Tab disableRipple label='Parents Accounts' icon={<BsFillPersonPlusFill className={classes.icons}/>}/>
                        <Tab disableRipple label='Holidays' icon={<ImHappy />}/>
                        <Tab disableRipple label='Teachers Account' icon={<BsFillBrightnessHighFill className={classes.icons}/>}/>
                        <Tab disableRipple label='Openings' icon={<VscAccount className={classes.icons}/>}/>
                    </Tabs>
                    <Button aria-controls='menu' onClick={handleOpenMenu} variant='contained' color='secondary' className={classes.account}>
                        Profile
                    </Button>
                    </>)}

                </Toolbar>
            </AppBar>

            <Menu style={{marginTop: '50px'}}id='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)} >
                <MenuItem onClick={handleMenuClose} >My Account</MenuItem>
                <MenuItem onClick={handleMenuClose} >Exam Results</MenuItem>
                <MenuItem onClick={handleMenuClose} >Promotions</MenuItem>
                <MenuItem onClick={handleMenuClose} >Pending Fees</MenuItem>
                <MenuItem onClick={handleMenuClose} >Final Projects</MenuItem>
            </Menu>
        </>
    )
}

export default NavBar
