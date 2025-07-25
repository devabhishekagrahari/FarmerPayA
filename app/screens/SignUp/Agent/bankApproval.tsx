import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import BankApprovalIcon from "../../../assets/images/agentSignUp/BankApproval.svg"
import { Image } from "react-native";

const{width , height} = Dimensions.get('window');
const BankApproval=({navigation}:any)=>{
    return (
           <View>
           <View style={{borderColor:'#000' ,height:height*0.9,flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            
            <BankApprovalIcon/>
            <Text style={{marginTop:16}}>Bank Approval in 24 h</Text>
           </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Main')} style={{backgroundColor:'#6929C4' ,width:width*0.8, height:60, marginHorizontal:16,alignSelf:'center',borderRadius:32,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff'}}>Start Assissting Farmers</Text>
            </TouchableOpacity>
            </View>
    );
}

export default BankApproval;