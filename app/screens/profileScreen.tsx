import React from "react";
import {  ScrollView, Text, View } from "react-native";
import CheckBalanceCard from "../components/Profile/checkBalance";
import SettingsCompo from "../components/Profile/settings";


const ProfileScreen=()=>{
    return(
        <ScrollView  style={{flex:1, padding:16,gap:20}}>
            <Text>Profile</Text>
            <CheckBalanceCard/>
            <SettingsCompo/>
        </ScrollView>
    )
}

export default ProfileScreen;