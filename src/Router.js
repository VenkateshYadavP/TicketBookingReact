import React from "react";
import { Scene, Router } from 'react-native-router-flux';
import Movies from "./Components/Movies";
import Confirmation from './Components/Confirmation';
const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 10 }}>
        <Scene key="main">
        <Scene
        key = "movieList"
        component =  {Movies}
        title = "Movies"
        />
        <Scene
        key = "Confirmation"
        component =  {Confirmation}
        title = "Confirmation"
        />
        </Scene>
        </Router>
    );
} 

export default RouterComponent;