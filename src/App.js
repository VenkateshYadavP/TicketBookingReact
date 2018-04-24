import React,{Component} from "react";
import {  
    View,
    Text
} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reduers";
import Router from "./Router";
class App extends Component {
    render() {
        return(
            <Provider store = {createStore(reducer)}>
                <Router/>
            </Provider>
        );
    }
}

export default App;