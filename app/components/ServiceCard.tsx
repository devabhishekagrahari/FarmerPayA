import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const ServiceCard = ({ title, icon }: { title: string; icon: any }) => (

  <TouchableOpacity style={styles.card}>
    <View style={{width:'54%',  paddingTop: 16, paddingLeft:16}}>
      <Text style={styles.label}>{title}</Text>
      </View>
      <View style={{width:'45%' ,padding: 6,justifyContent:'center'}}>
         <Image source={icon} style={styles.icon} />
      </View>
  </TouchableOpacity>

);

const Services=()=>{
  return (
     <View  style={{width: width*0.96, aspectRatio:1.26}}>
      <Text style={styles.sectionTitle}>Services</Text>
      <View style={styles.servicesGrid}>
        <View style={{ width:'48.8%'}}>
        <ServiceCard title='Loans' icon={require('../assets/images/loans.png')} />
        <ServiceCard title='Insurance' icon={require('../assets/images/insurance.png')} />
        <ServiceCard title='Schemes' icon={require('../assets/images/schemes.png')} /></View>
        <View style={{ width:'48.8%',marginLeft:6}}>
          <View style={{height:'62.255%', marginBottom:3 }}>
              <TouchableOpacity style={styles.card2}>
                <Text style={[{ fontWeight: '500',fontSize:14, color:'#4506A0',flexDirection:'row',left:0}]}>{'AI Advisory'}</Text>
                <Image source={require('../assets/images/ai.png')} style={[styles.icon,{alignSelf:'flex-end' ,marginTop:4}]} />
              </TouchableOpacity>
          </View>
          <View style={{height:'20%',marginTop:6}}>
            <ServiceCard title='My Score' icon={require('../assets/images/score.png')} />
          </View>
        </View>
      </View>
      </View>
    );
}
export default Services;

const styles = StyleSheet.create({
  card: {
    width:'102%',
    aspectRatio:2.3508,
    backgroundColor: '#4506A00D',
    borderRadius: 12,
    margin: 3,
    flexDirection:'row',
    borderWidth:1.5,
    borderColor:'#4506A026',
    justifyContent:'space-between'
  },
  card2: {
    width:'102%',
    aspectRatio:1.14522,
    borderWidth:1.5,
    backgroundColor: '#4506A00D',
    borderColor:'#4506A026',
    borderRadius: 12,
    padding:12,
    margin: 3,
  },
  icon: { 
    width: '90%',
    aspectRatio:1,
    marginBottom: 8, 
    resizeMode:'contain' 
  },
  label: { 
    fontWeight: '500', 
    fontSize:12,
    color:'#4506A0'
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 8,
    color:'#1F077A'
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    verticalAlign:'auto',
    paddingHorizontal: 10,
    marginLeft:6
  
  },
});

