import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import RestaurantList from "../screens/RestraduantList";
import RestraduantDetails from "../screens/RestraduantDetails";
import About from "../screens/About";
import Header from "../components/Header";

const screens = {
    Home: {
        screen: RestaurantList,
        navigationOptions: ({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title={"Restaurant APP"}/>
            }
        }

    },
    RestaurantDetails: {
        screen: RestraduantDetails,
        navigationOptions: {
            title: 'Restaurant Details',
            headerStyle: {backgroundColor: '#fff7ed', height: 60}
        }
    },
    About: {
        screen: About
    }
};

const HomeStack = createStackNavigator(screens)


export default HomeStack
