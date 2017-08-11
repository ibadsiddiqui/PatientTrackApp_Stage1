import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // paddingBottom: Metrics.baseMargin
    backgroundColor: "#fff"

  },
  viewLogo:{
    height: 150,
    backgroundColor: "#FF9800",
  },
  insertBar: {
    marginTop: 40,
    marginLeft: 135,
    color: "#FF9800",
    fontWeight: "200",
    fontSize: 20,
  },
  logo: {
    marginTop: 40,
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

})