import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // paddingBottom: Metrics.baseMargin
    backgroundColor: "#fff"
  },
  viewLogo:{
    height: 170,
    backgroundColor: "#FF9800",
  },
  backButton:{
    marginLeft: 10,
    height: 40,
    width: 40
  },
  insertBar: {
    paddingBottom: 10,
    marginTop: 0,
    color: "#FF9800",
    fontWeight: "200",
    fontSize: 15,
  },
  logo: {
    marginTop: 20,
    marginLeft: 160,
    color: "#FFF",
    fontWeight: "200",
    fontSize: 40,
  },  
  logo2: {
    marginLeft: 98,
    color: "#FFF",
    fontWeight: "200",
    fontSize: 17,
  },
  centered: {
    alignItems: 'center'
  },
  smallFont:{
    fontSize: 10,
    margin: 0,
    color: "#FF9800",
  },

})