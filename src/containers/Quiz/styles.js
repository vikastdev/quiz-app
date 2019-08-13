import { StyleSheet, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, dynamicSize } from '../../constants/dimensions';
import { Colors } from '../../constants'

const styles = StyleSheet.create({
  mainContainer:{
    flex:1, 
    backgroundColor:Colors.blue_background
  },
  container: {
    backgroundColor: '#000',
    borderRadius: 5,
    width: responsiveWidth(32),
  },
  text: {
    fontSize: dynamicSize(30),
    color: '#FFF',
   
  },
  stopwatchContainer:{
    alignSelf:'flex-end',
    flexDirection:'row',
    marginHorizontal:responsiveWidth(7),
    marginTop:responsiveHeight(4),
    marginBottom:responsiveHeight(3),
    paddingHorizontal:responsiveHeight(2),
    backgroundColor:Colors.yellow_background,
    borderRadius:responsiveHeight(2),
    paddingVertical:responsiveHeight(1),
  },
  cardView: {
    backgroundColor: Colors.white,
    shadowColor: Colors.LightGray,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    elevation: 9,
    height: responsiveHeight(60),
    width:responsiveWidth(90),
    paddingHorizontal:responsiveWidth(3),
    paddingVertical:responsiveWidth(5),
    marginHorizontal: responsiveWidth(5),
    borderRadius:responsiveWidth(8)
  },
  multipleContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  stopWatchImage:{
    height:responsiveWidth(10),
    width:responsiveWidth(10)
  },
  stopWatch:{
    justifyContent:'center',
    marginRight:responsiveWidth(1.2),
    marginLeft:responsiveWidth(1)
  },
  questionTextTitle:{
    fontSize:dynamicSize(25),
    color:Colors.background_dark,
    fontWeight:'600'
  },
  questionText:{
    fontSize:dynamicSize(18),
    paddingTop:responsiveHeight(1),
    fontWeight:'400',
    color:Colors.steel_grey
  },
  paginationStyle:{
    ...Platform.select({
      ios:{
        marginBottom:responsiveHeight(5),
        bottom:responsiveHeight(6)
      },
      android:{
        marginBottom:responsiveHeight(5),
        bottom:responsiveHeight(6)
      }
       
    })
  },
  wrapper:{ 
   height:responsiveHeight(79)
  },
  submitButton:{
    height:responsiveWidth(13),
    width:responsiveWidth(37),
    borderRadius:responsiveWidth(7),
    backgroundColor:Colors.background_dark,
    alignSelf:'center',
    ...Platform.select({
			android: {
       
        marginTop:responsiveHeight(10),
      },
      ios:{
        marginTop:responsiveHeight(10),
      }
		}),
  
    justifyContent:'center'
  },
  submitText:{
    color:Colors.white,
    textAlign:'center',
    fontSize:dynamicSize(18),
    fontWeight:'500'
  }
});

export default styles;
