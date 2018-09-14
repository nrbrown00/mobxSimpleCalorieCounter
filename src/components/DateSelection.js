import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

@inject('mealsStore')
@observer
class DateSelection extends Component {
    
    increaseDate = () => {
        this.handleDayChange(1);
    };

    decreaseDate = () => {
        this.handleDayChange(-1);
    };

    handleDayChange = increment => {
        this.props.mealsStore.changeDay(increment);
    };

    render(){
        const isToday = this.props.mealsStore.isToday;
        const dateDisplay = this.props.mealsStore.dateDisplay;

        return (
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
                        {dateDisplay}
                    </Typography>
                </Grid>
                <Grid item xs={4} container justify="flex-start">
                    <IconButton variant="fab" 
                        aria-label="Next Day"
                        onClick={this.increaseDate}
                        disabled={isToday}>
                        <Icon>chevron_right</Icon>
                    </IconButton>
                </Grid>
            </Grid>
        );
    };
};

export default DateSelection;