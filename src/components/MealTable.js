import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';


import MealTableRow from './MealTableRow';

@inject('mealsStore')
@observer
class MealTable extends Component {
    componentWillMount() {
        this.props.mealsStore.loadMeals();
    }

    handleDelete = () => {
        this.props.mealsStore.deleteSelected();
    }

    render() {
        const meals = this.props.mealsStore.mealsForDay;
        return (
            <Table className="auto-scroll">
                <TableHead>
                <TableRow>
                    <TableCell padding="none" style={{maxWidth: '1em'}}>
                        <IconButton variant="fab" 
                                aria-label="Delete Selected"
                                onClick={this.handleDelete}
                                disabled={!this.props.mealsStore.someMealsSelected}>
                            <Icon>delete</Icon>    
                        </IconButton>
                    </TableCell>
                    <TableCell>Meal</TableCell>
                    <TableCell numeric>Calories</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {meals.map(meal => {
                    return (
                        <MealTableRow meal={meal} key={meal.id}/>
                    );
                })}
                </TableBody>
            </Table>
        )
    };
};


export default MealTable;