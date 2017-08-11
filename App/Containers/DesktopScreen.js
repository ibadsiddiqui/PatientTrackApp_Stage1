import React, { Component } from 'react'
import { 
  ScrollView, 
  Text,
  Alert,
  Image, 
  View,
  TextInput,
  TouchableHighlight,
  StatusBar,
  AsyncStorage,
} from 'react-native'
import { Images } from '../Themes'
// Styles
import styles from './Styles/DesktopScreenStyles'
import {navigate} from 'react-navigation';
// importing for AsyncStorage

export default class DesktopScreen extends Component {
    constructor(){
        super();

    }
    // load data from asyncstorage
    render () {
        const {params} = this.props.navigation.state;
        return (
        <View>
        <StatusBar backgroundColor="#FF5722" barStyle="light-content"/>
            <View style={styles.viewLogo}>
                <Text style={[styles.centered, styles.logo]}>Hello! </Text>
                <Text style={[styles.centered, styles.logo2]}>Welcome Doctor! </Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.section} >
                    <View style={styles.infoSection}>
                        <Text style={styles.smallFont}>Name:</Text>
                        <Text style={styles.infoData}>{params.name}</Text>
                        <View style={{backgroundColor: "#BDBDBD", borderBottomWidth: 1, marginBottom: 20}}/>

                        <Text style={styles.smallFont}>Email:</Text>
                        <Text style={styles.infoData}>{params.email}</Text>
                        <View style={{backgroundColor: "#BDBDBD", borderBottomWidth: 1, marginBottom: 20}}/>                        

                        <Text style={styles.smallFont}>Password:</Text>
                        <Text style={styles.infoData}>{params.password}</Text>
                        <View style={{backgroundColor: "#BDBDBD", borderBottomWidth: 1, marginBottom: 20}}/>
                        
                        <Text style={styles.smallFont}>Bio:</Text>
                        <Text style={styles.infoData}>{params.bio}</Text>
                        <View style={{backgroundColor: "#BDBDBD", borderBottomWidth: 1, marginBottom: 2}}/>
                        
                    </View>
                    <Text style={[styles.centered, styles.sectionLogo]}>So, what do you wanna do today?? </Text>
                </View>
                <View style={styles.btnBackground}>
                    <View>
                        <TouchableHighlight style={styles.btnStyle} onPress={()=>this.props.navigation.navigate('ViewPatientScreen')}>
                            <Text style={styles.submitText}>View Patient</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.btnStyle} onPress={()=>this.props.navigation.navigate('InsertPatientScreen')}>
                            <Text style={styles.submitText}>Insert Patient</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.btnStyle} onPress={()=>this.props.navigation.navigate('SearchPatientScreen')}>
                            <Text style={styles.submitText}>Search Patient</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        </View>
        )
    }
}
