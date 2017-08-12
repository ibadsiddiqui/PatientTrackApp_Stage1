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

export default class InsertPatientScreen extends Component {
    constructor(){
        super();
    }

    render () {
        return (
        <View>
        <StatusBar backgroundColor="#FF9800" barStyle="light-content"/>
        <View style={styles.viewLogo}>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('DesktopScreen')}>
                <Image 
                    source={require('../Images/Icons/back-button@2x.png')} 
                    style={styles.backButton}
                    />
            </TouchableHighlight>
            <Text style={[styles.centered, styles.logo]}>Now, </Text>
                <Text style={[styles.centered, styles.logo2]}>Lets enter some patient info! </Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.smallFont}>Name:</Text>
                    <TextInput style={styles.insertBar}/>
                        
                    <Text style={styles.smallFont}>PatientID:</Text>
                    <TextInput style={styles.insertBar}/>
                
                    <Text style={styles.smallFont}>Sex:</Text>
                    <TextInput style={styles.insertBar}/>
            
                    <Text style={styles.smallFont}>DOB:</Text>
                    <TextInput style={styles.insertBar}/>                    
                </View>
            </ScrollView>
        </View>
        )
    }
}
