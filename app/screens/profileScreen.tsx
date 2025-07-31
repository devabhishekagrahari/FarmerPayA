import React from "react";
import {  ScrollView, Text, View } from "react-native";
import CheckBalanceCard from "../components/profile/checkBalance";
import SettingsCompo from "../components/profile/settings";


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