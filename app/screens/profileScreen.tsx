import React from "react";
import {  Text, View } from "react-native";
import CheckBalanceCard from "../components/Profile/checkBalance";
import SettingsCompo from "../components/Profile/settings";


const ProfileScreen=()=>{
    return(
        <View  style={{flex:1, padding:16,gap:20}}>
            <Text>Profile</Text>
            <CheckBalanceCard/>
            <SettingsCompo/>
        </View>
    )
}

export default ProfileScreen;