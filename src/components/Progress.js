import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';

@inject('mealsStore')
@observer
class Progress extends Component {

    handleGoalChange = e => {
        var goal = parseInt(e.target.value, 10);
        this.props.mealsStore.setCalorieGoal(goal || 0);
    };

    render() {
        const caloriesForDay = this.props.mealsStore.caloriesForDay;
        const calorieGoal = this.props.mealsStore.calorieGoal;
        const progress = caloriesForDay / calorieGoal * 100;

        return (
            <Grid container spacing={8} justify="center">
                <Grid item xs={12}>
                    <LinearProgress 
                        color={progress > 100 ? 'secondary' : 'primary'} 
                        variant="determinate" 
                        value={progress} />
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        type="number" 
                        label="Total"
                        disabled 
                        fullWidth={true}
                        value={caloriesForDay} />
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        type="number" 
                        label="Calorie Goal" 
                        fullWidth={true}
                        inputProps={{step: 100, min: 0}}
                        value={calorieGoal}
                        onChange={this.handleGoalChange} />
                </Grid>
            </Grid>
        );
    };

};

export default Progress;