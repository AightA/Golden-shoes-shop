import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../components/ProductCard';

const  Home = () => {
    return (
        <Grid container>
            <Grid xs={12} md={4} item> <ProductCard/> </Grid>
            <Grid xs={12} md={4} item> <ProductCard/> </Grid>
            <Grid xs={12} md={4} item> <ProductCard/> </Grid>
            
        </Grid>
        // </Container>
    )
}


export default Home

