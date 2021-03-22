import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { returnOrder } from '../services/api';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    paddingTop: 10,
  },
  textAreaControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    paddingTop: 10,
  },
}));

const ReturnForm = ({ order }) => {
  const classes = useStyles();
  const reason = '';
  const description = '';
  const trackNumber = '';

  const formik = useFormik({
    initialValues: {
      reason: '',
      description: '',
      trackNumber: '',
    },
    validationSchema: Yup.object().shape({
      reason: Yup.string().required(),
      description: Yup.string().required(),
      trackNumber: Yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const returnItem = await returnOrder({
          ...values,
        });
        resetForm({ values: '' });
      } catch (e) {
        console.log('err', e);
      }
    },
  });

  const { getFieldProps } = formik;

  return (
    <Card className={classes.root}>
      {/* <Typography variant='h7'>Return process</Typography> */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <InputLabel htmlFor='outlined-age-native-simple'>
            Return due to
          </InputLabel>
          <TextField
            className={classes.formControl}
            id='filled-secondary'
            label='Track number'
            variant='filled'
            color='secondary'
            value={trackNumber}
            {...getFieldProps('trackNumber')}
          />
          <InputLabel htmlFor='outlined-age-native-simple'>Issue</InputLabel>
          <FormControl variant='outlined' className={classes.formControl}>
            <Select native value={reason} {...getFieldProps('reason')}>
              <option aria-label='None' value='' />
              <option value={'Wrong size'}>Wrong size</option>
              <option value={'Bad quality'}>Bad quality</option>
              <option value={'Different color'}>Different color</option>
            </Select>
          </FormControl>
          <InputLabel htmlFor='outlined-age-native-simple'>
            Description
          </InputLabel>
          <TextareaAutosize
            rowsMin={3}
            value={description}
            aria-label='minimum height'
            placeholder='Minimum 3 rows'
            {...getFieldProps('description')}
            className={classes.textAreaControl}
          />
        </Grid>
      </Grid>
      <Button
        onClick={formik.handleSubmit}
        size='small'
        color='primary'
        variant='contained'
        fullWidth
      >
        Start Return Process
      </Button>
    </Card>
  );
};

export default ReturnForm;
