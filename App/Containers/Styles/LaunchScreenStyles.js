import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // paddingBottom: Metrics.baseMargin
    backgroundColor: "#fff"

  },
  logo: {
    marginTop: 80,
    marginLeft: 50,
    color: "#E64A19",
    fontWeight: "700",
    fontSize: 30,
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
  loginSection:{
    margin: 0,
    marginTop: 100
  },
  submitBtn1:{
    alignItems: 'center',    
    justifyContent: 'center', 
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 50,
    width: 350,
    height: 40,
    },
    submitBtn2:{
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 5,
      height: 40,
      justifyContent: 'center',
      marginTop: 150,
      marginLeft: 5,
      
      width: 350,
    },
    submitText:{
        color: '#E64A19',
        fontWeight: '600'
    },
});