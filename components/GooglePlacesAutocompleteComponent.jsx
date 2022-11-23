import React from 'react';
import {Dimensions, ScrollView} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {useDispatch} from "react-redux";
import {setLocation} from "../redux/reducer/restraduantSliceReducer";

const GooglePlacesAutocompleteComponent = () => {
    const dispatch = useDispatch();

    return (
        <ScrollView horizontal={true}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{flexGrow: 1}}>
            <GooglePlacesAutocomplete

                query={{key: 'AIzaSyDmKJYeqgs3F42zaQtHVC8jgivkn3URjVw'}}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    const { width, height } = Dimensions.get('window');
                    const ASPECT_RATIO = width / height;
                    const LATITUDE_DELTA = 0.0922;
                    const latDelta = details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat;
                    const lngDelta = latDelta * ASPECT_RATIO;
                    const location = {
                        address: details.formatted_address,
                        latLng: {
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                            latDelta,
                            lngDelta
                        }
                    }

                    dispatch(setLocation(location));
                }}


                onFail={error => console.log(error)}
                onNotFound={() => console.log('no results')}
                placeholder={'enter a place'}/>
        </ScrollView>
    );
};

export default GooglePlacesAutocompleteComponent;
