import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

// The first commit of Material-UI

export default function CenteredGrid() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container justify='center' item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker-inline'
                label='Date of Visit'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid container justify='center' item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>Restaurant</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={'Bromley'}
              //   onChange={handleChange}
            >
              <MenuItem value={'Leeds'}>Leeds</MenuItem>
              <MenuItem value={'Bromley'}>Bromley</MenuItem>
              <MenuItem value={'Halifax'}>Halifax</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify='center' item xs={12}>
          <TextField id='standard-basic' label='Review' />
        </Grid>
        <Grid container justify='center' item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>Rating</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={1}
              //   onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
