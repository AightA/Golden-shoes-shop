import React, { useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import OrderCard from '../components/OrderCard';
import {fetchOrders} from '../services/api';

  
const  MyOrder = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const resultData = await fetchOrders();
              setOrders(resultData);
            }catch(e){
                console.error("Error", e)
            }
        };
        fetchData();
    }, []);

    return (
        <Grid container spacing={2}>
            {orders.map(order => (  
            <Grid key={order.id} xs={12} md={4} item>
                <OrderCard order={order} />
            </Grid>
            ))}
        </Grid>
    );
};


export default MyOrder;

