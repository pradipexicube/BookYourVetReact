import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
 import { Examples } from '@shoutem/ui';
 import { Font } from 'expo';
 import Signup from './src/components/Signup';
 import Landing from './src/components/Landing';
 import Login from './src/components/Login';
 import Home from './src/components/Home';
 import ListPage from './src/components/ListPage';
 import AnimalRegister from './src/components/AnimalRegister';
 import PetConsult from './src/components/PetConsult';
 
 //import { Router, Scene } from 'react-native-router-flux';
 import {Router, Route, Schema, Animations, TabBar,Stack,Scene, Actions} from 'react-native-router-flux'
 import firebase from "firebase";

export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDvsD-VA3sBmfNAnRUGHVyDTLjXv3PCUcw",
      authDomain: "bookyourvetreact-6a1bf.firebaseapp.com",
      databaseURL: "https://bookyourvetreact-6a1bf.firebaseio.com",
      projectId: "bookyourvetreact-6a1bf",
      storageBucket: "bookyourvetreact-6a1bf.appspot.com",
      messagingSenderId: "358320895461"
    };
    firebase.initializeApp(config);
  }
  constructor(){
    super();
      this.state={
        fontLoaded:false, 
      };
     
  }
async componentDidMount() {
  await Expo.Font.loadAsync({
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./src/assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Black': require('./src/assets/fonts/Rubik-Black.ttf'),
    'Rubik-Medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
    'ColabReg': require('./src/assets/fonts/ColabReg.otf')
    
  });
  this.setState({fontLoaded:true});
}
  
  render() {
    return (
     
      //<Login />
      //  <Landing />
      this.state.fontLoaded ? (
      
       <PetConsult />
     ):null
      
    //  this.state.fontLoaded ? (
      
    //    <Router>
    //    <Stack key="root">
    //    <Scene key="Landing" component={Landing} />
    //    <Scene key="Signup" component={Signup}  />
    //    <Scene key="Login" component={Login} />
    //    <Scene key="Home" component={Home} />
    //    </Stack>
    //  </Router>
    //  ):null

    //  <Router>
    //      <Scene   title="Signup"   component={Signup}  />
    //      <Scene  title="Signin"   component={Signin} />     
    //  </Router>
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
