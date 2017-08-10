import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // paddingBottom: Metrics.baseMargin
    backgroundColor: "#fff"

  },
  viewLogo:{
    height: 260,
    backgroundColor: "#FF5722",
  },
  logo: {
    marginTop: 80,
    marginLeft: 135,
    color: "#FFF",
    fontWeight: "200",
    fontSize: 40,
  },  
  logo2: {
    marginLeft: 120,
    color: "#FFF",
    fontWeight: "200",
    fontSize: 20,
  },
  smallFont:{
    fontSize: 10,
  },
  infoData:{
    marginLeft: 30,
    fontSize: 15
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
  sectionLogo:{
    marginLeft: 50,
    marginTop: 10,
    fontSize: 17,
  },
  btnBackground:{
    flex:1,
    flexDirection: 'row',
    marginTop: 65,
    marginBottom: 10 
  },
  btnStyle:{
    marginLeft: 30,
  },
  submitText:{
      color: '#E64A19',
      fontWeight: '600'
  },
});