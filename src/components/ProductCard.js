import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { appConfig } from '../services/config';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { image } = product;

  return (
    <Card className={classes.root}>
      <CardHeader title={product.name} subheader={`£${product.price}`} />
      <CardMedia
        className={classes.media}
        image={`${appConfig.apiURL}${image.url}`}
        title={product.name}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label='show more'>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
