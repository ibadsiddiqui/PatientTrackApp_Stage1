import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: "#FFF"
  },
  logo: {
    color: "#E64A19",
    fontWeight: "700",
    fontSize: 30,
    marginTop: 80,
    marginLeft: 80,
  },
  centered: {
    alignItems: 'center'
  },
  inputEmail:{
    color: "#E64A19",
  },  
  inputPass:{
    color: "#E64A19",
  },
  inputName:{
    color: "#E64A19",
  },
  inputBio:{
    color: "#E64A19",
  },
  loginSection:{
    margin: 0,
    marginTop: 100
  },
  submitBtn1:{
    alignItems: 'center',    
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: 'transparent',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center', 
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width: 350,
  },
  submitBtn2:{
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 5,
    width: 350,
  },
  submitText:{
    color: '#E64A19',
    fontWeight: '600'
  },
});