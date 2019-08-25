import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './sass/main.scss'
import View from './components/MainView.jsx';
import Linked_list from './components/Linked_list.jsx';
import Stack from './components/Stack.jsx';
import Queue from './components/Queue.jsx';

class Routing extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={View}/>
                    <Route exact path="/linked-list" component={Linked_list}/>
                    <Route exact path="/stack" component={Stack}/>
                    <Route exact path="/queue" component={Queue}/>
                </div>
            </Router>
        )
    }

}
ReactDOM.render(<Routing />, document.getElementById('root'));
 