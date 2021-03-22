import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { fetchOrders } from '../services/api';
import OrderCard from '../components/OrderCard';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultData = await fetchOrders();
        setOrders(resultData);
      } catch (e) {
        console.error('Error', e);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={4}>
      {orders.map((order) => (
        <Grid key={order.id} xs={12} md={4} item>
          <OrderCard order={order} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyOrder;
