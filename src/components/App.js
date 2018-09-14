import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import AddMeal from './AddMeal';
import DateSelection from './DateSelection';
import MealTable from './MealTable';
import Progress from './Progress';


class App extends Component {
    render() {
        return (
            <div className="app">
                <AppBar position="static" color="primary">
                    <Toolbar style={{maxWidth:"80em", margin:"auto", width:"100%"}}>
                        <Typography variant="title" color="inherit" >
                            Calorie Counter
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="main">
                    <Paper className="content">
                        <AddMeal />
                        <DateSelection />
                        <Progress />
                        <MealTable />
                    </Paper>
                </div>    
            </div>
        );
    }
}

export default App;
