import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


@inject('mealsStore')
@observer
class AddMeal extends Component {

    handleMealNameChange = e => {
        this.props.mealsStore.setAddMealName(e.target.value);
    }
    
    handleMealCalorieChange = e => {
        this.props.mealsStore.setAddMealCalories(parseInt(e.target.value, 10) || 0);
    }

    canAddMeal = () => {
        return this.props.mealsStore.addMealName && this.props.mealsStore.addMealCalories
    }

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            this.addMeal();
        }
    }
    
    increaseDate = () => {
        this.handleDayChange(1);
    }

    decreaseDate = () => {
        this.handleDayChange(-1);
    }

    handleDayChange = increment => {
        this.props.mealsStore.changeDay(increment);
    }

    addMeal = () => {
        if (this.canAddMeal()) {
            this.props.mealsStore.addMeal();    
        }
    }

    render(){
        const addMealEnabled = this.canAddMeal();

        return (
            
                <Grid container spacing={8} >
                    <Grid item xs={12} container justify="space-evenly">
                        <Grid item xs={4}>
                            <TextField 
                                label="Meal Name"
                                inputProps={{maxLength:50}}
                                value={this.props.mealsStore.addMealName}
                                placeholder="Ice cream..."
                                onChange={this.handleMealNameChange}
                                onKeyDown={this.handleKeyDown}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                type="number" 
                                label="Calories" 
                                inputProps={{step: 50, min: 0}}
                                value={this.props.mealsStore.addMealCalories}
                                onChange={this.handleMealCalorieChange}
                                onKeyDown={this.handleKeyDown} />
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="fab" 
                                color="primary" 
                                disabled={!addMealEnabled} 
                                aria-label="Add Meal"
                                onClick={this.addMeal}>
                                <AddIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={4} container justify="flex-end">
                            <IconButton variant="fab" 
                                aria-label="Previous Day"
                                onClick={this.decreaseDate}>
                                <Icon>chevron_left</Icon>
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} container justify="center" >
                            <Typography
                                color="primary"
                                variant="display1">
                                {this.props.mealsStore.dateDisplay}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} container justify="flex-start">
                            <IconButton variant="fab" 
                                aria-label="Next Day"
                                onClick={this.increaseDate}
                                disabled={this.props.mealsStore.isToday}>
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            
        )
    }

};

export default AddMeal;