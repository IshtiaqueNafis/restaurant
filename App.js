import React from "react";
import {Box, Center, Container, NativeBaseProvider} from "native-base";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import RestaurantList from "./screens/RestraduantList";
import AppBar from "./screens/AppBar";
import RestraduantList from "./screens/RestraduantList";
import Navigator from "./routes/Drawer"


export default function App() {
    return (
        <NativeBaseProvider>
            <Provider store={store}>
                <Navigator/>
            </Provider>
        </NativeBaseProvider>
    );
}



