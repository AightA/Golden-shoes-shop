import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useClassStyles = makeStyles(() => ({
    headingTitle: {
        flex:1,
        marginLeft: 8,
    },
    navTitle1: {
        marginRight: 20,
    },
    navTitle2: {
        marginRight: 4,
    }
}));
const NavBar = () => {
    const styleClasses = useClassStyles();
    return ( 
    <AppBar position="static">
    <Toolbar>
      <StorefrontIcon />
      <Typography variant="h6" className={styleClasses.headingTitle}>Golden shoes</Typography>
      <Badge badgeContent={4} color="secondary" className={styleClasses.navTitle1}>
      <ShoppingBasketIcon/> 
      </Badge>
      <AccountBoxIcon variant="h6" className={styleClasses.navTitle2}/>
      {/* <Typography > Account </Typography> */}
    </Toolbar>
  </AppBar>
    )
}



export default NavBar;
