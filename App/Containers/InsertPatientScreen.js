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
import styles from './Styles/InsertPatientScreenStyles'
import {navigate} from 'react-navigation';
// importing for AsyncStorage

export default class InsertPatientScreen extends Component {
    constructor(){
        super();

    }
    // load data from asyncstorage
    render () {
        const {params} = this.props.navigation.state;
        return (
        <View>
        <StatusBar backgroundColor="#FF9800" barStyle="light-content"/>
            <View style={styles.viewLogo}>
                <Text style={[styles.centered, styles.logo]}>Now, </Text>
                <Text style={[styles.centered, styles.logo2]}>Lets enter some patient info! </Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.section} >
                </View>
            </ScrollView>
        </View>
        )
    }
}
