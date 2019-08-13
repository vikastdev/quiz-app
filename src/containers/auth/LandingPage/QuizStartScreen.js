/**
 * Sample React Native Quiz App
 *  Landing Page
**/

import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';
import { getQuiz } from '../../../reducers/user'
import { connect } from "react-redux";
import { Images,i18n } from '../../../constants'

class QuizStartScreen extends Component {
 constructor(props){
   super(props)
   props.getQuiz()
 }
  
  // function on start quiz
  onStartQuiz=()=> {
    this.props.navigation.push('QuizScreen')
  }

  render() {
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={() => this.onStartQuiz()}>
        <View style={styles.cardView}>
          <Text style={styles.header}>{`${i18n.common.titleQuiz}`}</Text>
          <View style={styles.imageContainer}>
            <Image source={Images.coverQuiz} style={styles.quiz} resizeMode={'contain'}></Image>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onStartQuiz()}><Text style={styles.buttonText}>{`${i18n.common.startQuiz}`}</Text></TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = {
  getQuiz
};

const mapStateToProps = state => ({
  user: state.user
});

// used to connect loginscreen with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizStartScreen);

