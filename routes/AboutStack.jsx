import React from 'react';
import About from "../screens/About";
import {createStackNavigator} from "react-navigation-stack";
import Header from "../components/Header";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={"About APP"}/>
            }
        }
    },


};
const AboutStack = createStackNavigator(screens)


export default AboutStack;
