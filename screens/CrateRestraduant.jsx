import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {Button, Text, TextInput, View} from "react-native";
import {yupResolver} from "@hookform/resolvers/yup";
import {RestaurantDefaultValue, RestaurantSchema} from "../schema/FormData";
import {Input, TextArea} from "native-base";
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from "react-redux";
import GooglePlacesAutocompleteComponent from "../components/GooglePlacesAutocompleteComponent";
import {createRestraduantAsync, resetLocation} from "../redux/reducer/restraduantSliceReducer";

const CreateRestaurant = () => {
    const dispatch = useDispatch()
    const {location} = useSelector(state => state.restaurants);

    const {control, handleSubmit, errors, setValue, reset, getValues, watch} = useForm({
        resolver: yupResolver(RestaurantSchema)
    });
    const onSubmit = async data => {

        try {
            await dispatch(createRestraduantAsync({data,location}))
            dispatch(resetLocation())

        } catch (e) {
            console.log(e)
        }

    };


    return (
        <View>

            <GooglePlacesAutocompleteComponent/>


            <Text>Name</Text>
            <Controller
                name="restaurantName"
                control={control}
                defaultValue={RestaurantDefaultValue.restaurantName}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}/>

            <Text>Description</Text>
            <Controller
                name="description"
                control={control}
                defaultValue={RestaurantDefaultValue.description}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextArea
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}/>
            <Text>Phone number</Text>
            <Controller
                name="phone"
                control={control}
                defaultValue={RestaurantDefaultValue.phone}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        keyboardType="numeric"
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}/>

            <Text>TAGS</Text>
            <Controller
                name="tags"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={itemValue => setValue("tags", itemValue)}

                    >
                        <Picker.Item label="Indian" value="indian"/>
                        <Picker.Item label="Chinese" value="Chinese"/>
                        <Picker.Item label="Vegan" value="Vegan"/>
                    </Picker>
                )}/>
            <Text>Ratings</Text>
            <Controller
                name="rating"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={itemValue => setValue("rating", itemValue)}

                    >
                        <Picker.Item label="1" value="1"/>
                        <Picker.Item label="2" value="2"/>
                        <Picker.Item label="3" value="3"/>
                        <Picker.Item label="4" value="4"/>
                        <Picker.Item label="5" value="5"/>

                    </Picker>
                )}/>
            <Text>Location</Text>

            <Button
                onPress={handleSubmit(onSubmit)}
                title="Submit"
                color="#841584"
            />
        </View>
    );
};


export default CreateRestaurant;


