import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

@inject('mealsStore')
@observer
class AddMeal extends Component {

    handleMealNameChange = e => {
        this.props.mealsStore.setAddMealName(e.target.value);
    };
    
    handleMealCalorieChange = e => {
        let calories = parseInt(e.target.value, 10) || 0;
        if (calories > 10000) {
            calories = 10000;
        }
        this.props.mealsStore.setAddMealCalories(calories);
    };

    canAddMeal = () => {
        return this.props.mealsStore.addMealName && this.props.mealsStore.addMealCalories
    };

    handleKeyDown = e => {
        if (e.keyCode === 13) {
            this.addMeal();
        }
    };

    addMeal = () => {
        if (this.canAddMeal()) {
            this.props.mealsStore.addMeal();    
        }
    };

    render() {
        const addMealEnabled = this.canAddMeal();
        const addMealName = this.props.mealsStore.addMealName;
        const addMealCalories = this.props.mealsStore.addMealCalories;

        return (
            <Grid item xs={12} spacing={8} container justify="space-evenly">
                <Grid item xs={4}>
                    <TextField 
                        label="Meal Name"
                        inputProps={{maxLength:50}}
                        value={addMealName}
                        placeholder="Ice cream..."
                        onChange={this.handleMealNameChange}
                        onKeyDown={this.handleKeyDown}
                        InputLabelProps={{shrink: true}}
                        fullWidth={true}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        type="number" 
                        label="Calories" 
                        inputProps={{step: 50, min: 0}}
                        value={addMealCalories}
                        onChange={this.handleMealCalorieChange}
                        onKeyDown={this.handleKeyDown}
                        InputLabelProps={{shrink: true}}
                        fullWidth={true} />
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
        );
    };

};

export default AddMeal;