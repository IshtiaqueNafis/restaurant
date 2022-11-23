import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import CustomMapMarker from "../components/CustomMapMarker";

const About = ({navigation}) => {

   const latLng= navigation.getParam('latLng')
    console.log(latLng)
    return (
        <View>
            <View>

                <Text>Details</Text>
<CustomMapMarker latLng={latLng}/>
            </View>

        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        padding: 24

    }
})
