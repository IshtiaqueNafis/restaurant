import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import MapView, {Marker} from "react-native-maps";

const CustomMapMarker = ({latLng}) => {

    const [mapRegion, setmapRegion] = useState({
        latitude: latLng.lat,
        longitude: latLng.lng,
        latitudeDelta: latLng.latDelta,
        longitudeDelta: latLng.lngDelta
    });

    console.log({mapRegion})
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={mapRegion}>
                <Marker coordinate={mapRegion} title='Marker'/>


            </MapView>


        </View>
    );
};

export default CustomMapMarker;
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 200, // you can customize this
        width: 400,  // you can customize this
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
