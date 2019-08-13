import { StyleSheet } from 'react-native';

// custom modules
import { responsiveHeight, responsiveWidth, dynamicSize } from '../../../constants/dimensions';
import {Colors}  from '../../../constants'
// intreface style for no data found components


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: responsiveWidth(100),
    backgroundColor: Colors.background_dark
  },
  cardView: {
    backgroundColor: Colors.white,
    shadowColor: Colors.LightGray,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    elevation: 9,
    height: responsiveHeight(70),
    marginHorizontal: responsiveWidth(5),
    borderRadius:responsiveWidth(8)
  },
  header:{
    textAlign:'center',
    fontSize:dynamicSize(25),
    color:Colors.background_dark,
    fontWeight:'700',
     marginTop:responsiveHeight(4)
  },
  imageContainer:{
    alignSelf:'center'
  },
  quiz:{
    height:responsiveHeight(19),
    width:responsiveWidth(34), 
    marginTop:responsiveHeight(10)
  },
  buttonContainer:{
    height:responsiveWidth(15),
    width:responsiveWidth(37),
    borderRadius:responsiveWidth(7),
    backgroundColor:Colors.background_dark,
    alignSelf:'center',
    marginTop:responsiveHeight(8),
    justifyContent:'center'
  },
  buttonText:{
    fontSize:dynamicSize(16),
    textAlign:'center',
    color:Colors.white,
    fontWeight:'600'
  }
});

export default styles;
