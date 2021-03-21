import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Link from '@material-ui/core/Link';

const useClassStyles = makeStyles(() => ({
    headingTitle: {
        flex:1,
        marginLeft: 10,
    },
    myOrderedHeadingTitle: {
         marginLeft: 10,
    },
}));

const NavBar = () => {
    const styleClasses = useClassStyles();
    return ( 
      <AppBar position="static" >
        <Toolbar>
         <StorefrontIcon />
         <Typography variant="h6" className={styleClasses.headingTitle}> 
           <Link href="/" color="inherit">Golden shoes</Link>
         </Typography>
     
         <ShoppingBasketIcon/> 
         <Typography variant="h6" className={styleClasses.myOrderedHeadingTitle}>
          <Link href="/my-orders" color="inherit">My Orders</Link>
         </Typography>
        </Toolbar>
      </AppBar>
    )
}


export default NavBar;
