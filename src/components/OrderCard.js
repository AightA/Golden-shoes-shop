import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {appConfig} from '../services/config';
import ReturnForm from './ReturnForm';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const OrderCard = ({order}) =>  {
  const {image} = order.product; 
  const [retrunFormVisible, setReturnFormVisible] = useState(false);
  const showReturnForm = (order) => {
         setReturnFormVisible(true)
    }
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${order.product.name}`}
      />
        <CardMedia
        className={classes.media}
        image={`${appConfig.apiURL}${image.url}`}
        title={order.product.name}
      />
      <CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Track number: {order.track_number}
        </Typography>
      </CardContent>    
           <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
               Ordered by {order.date}
               </Typography>
               {/* then products here */}
           </CardContent>
       </CardActionArea>
       <CardActions>
           {!retrunFormVisible && <Button onClick={() => showReturnForm(order)} size="small" color="primary" variant="contained" fullWidth>
               Request Return Item
           </Button>}
           {retrunFormVisible && <ReturnForm order={order} />}
       </CardActions>
    </Card>
  );
}


// const OrderCard = ({order}) => {
//   const [retrunFormVisible, setReturnFormVisible] = useState(false);
//   const showReturnForm = (order) => {
//       setReturnFormVisible(true)
//   }
//   const classes = useStyles();
//   return (<Grid key={order.id} xs={12} md={4} item>
//       <Card className={classes.root}>
//           <CardActionArea>
//               <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                       {order.date}
//                   </Typography>
//                   {/* then products here */}
//               </CardContent>
//           </CardActionArea>
//           <CardActions>
//               {!retrunFormVisible && <Button onClick={() => showReturnForm(order)} size="small" color="primary">
//                   Request Return
//               </Button>}
//               {retrunFormVisible && <ReturnForm order={order} />}
//           </CardActions>
//           </Card>
//   </Grid>)
// }

// const ReturnForm = ({order}) => {
//   const options = ['Wrong item', 'Bad quality'];

//   const startReturnProcess = () => {
//       console.log('order return started for ', order)
//   }
//   return (
//       <div>
//           <select>
//               {options.map((option) => {
//                   return (<option key={option}>{option}</option>)
//               })}
//           </select>
//           <textarea></textarea>
//           <Button onClick={startReturnProcess} size="small" color="primary">
//               Start Return Process
//           </Button>
          
//       </div>
//   )
// }

export default OrderCard;
