import React, { Component } from 'react'
import { 
  ScrollView, 
  Text,
  Alert,
  Image, 
  View,
  TextInput,
  StatusBar,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/RegisterScreenStyles'

export default class LaunchScreen extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      email: "",
      password: "",
      bio: "",
    }
  }
  
  // load data from asyncstorage
  onSave = async () =>{
    //check if state email and passowrd is not empty
    if(this.state.name != "" && this.state.email != "" && this.state.password != ""){
      try{
        await AsyncStorage.multiSet([["@name", this.state.name],
                                    ["@email" , this.state.email],
                                    ["@password", this.state.password],
                                    ["@bio", this.state.bio]]);

        Alert.alert('Registration Completed', "You have been registerd as " + this.state.name)
        this.props.navigation.navigate('LaunchScreen', {userName: this.state.name, 
                                                        userEmail: this.state.email,
                                                        userPassword: this.state.password,
                                                        userBio: this.state.bio})
      }catch(error){
        Alert.alert(error.code,error.message)
      }
    }
    else
      Alert.alert('Empty Fields', "Please insert data in the required fields");
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#FFF' barStyle="light-content"/>
        <Text style={[styles.centered, styles.logo]}>Welcome Doctor! ;) </Text>      
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <View style={styles.loginSection}>
              <TextInput  style={styles.inputName}
                          keyboardType= 'default'
                          onChangeText={(text)=>{this.setState({name: text})}}   // assign the values to state on change Text
                          placeholder="Enter Name.."     />
              <TextInput  style={styles.inputEmail}
                          keyboardType= 'email-address'
                          onChangeText={(text)=>{this.setState({email: text})}}   // assign the values to state on change Text
                          placeholder="Enter Email.."     />
              <TextInput  style={styles.inputPass}
                          keyboardType= 'default'
                          onChangeText={(text)=>{this.setState({password: text})}} // assign the values to state on change Text
                          placeholder="Enter Password.." />
              <TextInput  style={styles.inputBio}
                          keyboardType= 'default'
                          onChangeText={(text)=>{this.setState({bio: text})}} // assign the values to state on change Text
                          placeholder="Enter Your Bio.." />
              <TouchableHighlight   
                          onPress = {this.onSave}                                  // on login validate
                          underlayColor ="#efefef" style={styles.submitBtn1}>
                <Text     style={styles.submitText}>Register</Text>
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight 
                          onPress = {()=>{this.props.navigation.navigate('LaunchScreen',{userData: this.state})}} // navigate to LauncScreen  assigned
                          underlayColor ="#efefef" style={styles.submitBtn2}>
                <Text style={styles.submitText}>Already registerd? Click here.</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

