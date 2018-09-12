import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MealsStore from './stores/MealsStore';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';


const mealsStore = new MealsStore();

ReactDOM.render(
    <Provider mealsStore={mealsStore}>
        <React.Fragment>
            <App />
            <DevTools />
        </React.Fragment>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
