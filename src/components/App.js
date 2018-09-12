import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit" >
                            Calorie Counter
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default App;
