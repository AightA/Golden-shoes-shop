import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
       
const ReturnForm = ({order}) => {
  const options = ['Wrong size', 'Bad quality', 'Different color'];

  const startReturnProcess = () => {
      console.log('order return started for ', order)
  }
  return (
      <Card>
              <select>
              {options.map((option) => {
                  return (<option key={option}>{option}</option>)
              })}
              </select>
              <br></br>
                <textarea></textarea>
              <br></br>
          <Button onClick={startReturnProcess} size="small" color="primary" variant="contained" fullWidth>
              Start Return Process
          </Button>
      </Card>
  )
};

export default ReturnForm;

