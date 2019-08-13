import { StyleSheet } from 'react-native';

// custom modules
import { responsiveHeight, responsiveWidth, dynamicSize } from '../../constants/dimensions';
import { Colors } from '../../constants'
// intreface style for no data found components


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:Colors.end_background
    },

    subContainer: {
        paddingHorizontal: responsiveWidth(9),
        marginHorizontal: responsiveWidth(9),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(5),
        paddingVertical:responsiveHeight(2),
        borderRadius:responsiveHeight(4),
        backgroundColor:Colors.score_button
    },

    scoreText:{
        color:Colors.DarkGrey,
        fontWeight:'500',
        textAlign:'center'
    },

    replayButton:{
       height:responsiveWidth(10),
       width:responsiveWidth(35),
       borderRadius:responsiveWidth(3),
       alignSelf:'center',
       backgroundColor:Colors.reply_button,
       marginTop:responsiveHeight(4),
       justifyContent:'center'
    }

});

export default styles;
