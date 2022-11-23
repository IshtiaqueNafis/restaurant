import React, {useEffect, useState} from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Container} from "native-base";
import {useDispatch, useSelector} from "react-redux";
import {getResturdantDataAsync} from "../redux/reducer/restraduantSliceReducer";
import Loading from "./Loading";
import {MaterialIcons} from "@expo/vector-icons";
import CreateRestaurant from "./CrateRestraduant";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";

const RestaurantList = ({navigation}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const {loading, restaurantsData} = useSelector(state => state.restaurants);


    useEffect(() => {
         onSnapshot(collection(db, "Restaurant"), () => {
            dispatch(getResturdantDataAsync())
        })


    }, [dispatch])

    if (loading) return <Loading/>


    return (
        <Container p={'10'}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                    />
                    <CreateRestaurant/>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList data={restaurantsData} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', item)}>
                    <Text>{item.restaurantName}</Text>
                </TouchableOpacity>
            )}/>

        </Container>
    );
};


export default RestaurantList;

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});

