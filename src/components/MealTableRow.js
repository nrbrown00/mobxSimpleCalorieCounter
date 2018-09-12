import React, {Component} from 'react';
import { observer } from 'mobx-react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

@observer
class MealTableRow extends Component {

    handleChange = () => {
        this.props.meal.toggle();
    };

    render() {
        return (
            <TableRow >
                <TableCell padding="none" style={{maxWidth:".5em"}}>
                    <Checkbox 
                        checked={this.props.meal.isSelected} 
                        onChange={this.handleChange}/>
                    
                </TableCell>
                <TableCell component="th" scope="row">
                    {this.props.meal.name}
                </TableCell>
                <TableCell numeric>{this.props.meal.calories}</TableCell>
            </TableRow>
        );
    };

};

export default MealTableRow;