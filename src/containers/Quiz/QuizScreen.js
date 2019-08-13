/**
 * Sample React Native Quiz App
 * Quiz Page
**/


import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import Stopwatch from '../../components/common/Timer';
import styles from './styles';
import EventsEmitter from '../../utilities/Event';
import SwiperFlatList from 'react-native-swiper-flatlist';
import MultipleChoice from '../../components/common/MultipleChoice';
import { Images, i18n } from '../../constants'
import { connect } from "react-redux";
import { Loader } from "../../components"
class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: true,
      stopwatchReset: false,
      quizTime: false,
      score: 0,
      startTime: 0,
      dataQuestions: props.user.quizQuestions
    };
  }

  componentDidMount() {
    EventsEmitter.on('onCorrect', this.correctAnswer);
    EventsEmitter.on('oninCorrect', this.incorrectAnswer);
  }

  componentWillUnmount() {
    EventsEmitter.removeListener('onCorrect', this.correctAnswer);
    EventsEmitter.removeListener('oninCorrect', this.incorrectAnswer);
  }

  shouldComponentUpdate() {
    return true
  }

  componentWillUpdate(nextProps) {
    if (nextProps.user.quizQuestions !== this.props.user.quizQuestions) {
      this.setState({
        dataQuestions: nextProps.user.quizQuestions
      })
    }
  }
  // function on submit of Quiz 
  finalSubmission = () => {
    this.setState({ stopwatchStart: false, quizTime: true });
    EventsEmitter.on('onSubmit', this.submitForScore)
  }

  // timer 
  getFormattedTime(time) {
    this.currentTime = time;
  };

  // store time and get quiz Score
  submitForScore = (time) => {
    this.props.navigation.navigate('ScoreScreen', {
      data: {
        quizTime: time,
        score: this.state.score
      }
    })
  }

  // function on giving correct answer
  correctAnswer = (item, index) => {
    this.setState({ score: this.state.score + 1 })
  }

  // function on giving incorrect answer
  incorrectAnswer = (item, index) => {
    this.setState({ score: this.state.score - 1 })
  }

  // render function
  render() {
    const {dataQuestions}= this.state;
    const {quizQuestions}=this.props.user;
    return (
      <SafeAreaView style={styles.mainContainer}>
        {
          dataQuestions ?
          <View>
            <View style={styles.stopwatchContainer}>

              <View>
                <Image source={Images.stopWatch} style={styles.stopWatchImage} resizeMode={'contain'}></Image>
              </View>
              <View style={styles.stopWatch}>
                <Stopwatch
                  start={this.state.stopwatchStart}
                  reset={this.state.stopwatchReset}
                  options={[styles.container, styles.text]}
                  getTime={this.getFormattedTime}
                  quizTime={this.state.quizTime}
                  startTime={this.state.startTime}
                />
              </View>
            </View>

            <SwiperFlatList style={styles.wrapper} index={0}
              showPagination
              paginationStyle={styles.paginationStyle}
            >
              {
                quizQuestions.map((item, index) => {
                  return (
                    <View>
                      <MultipleChoice
                        questionText={styles.questionText}
                        questionTextTitle={styles.questionTextTitle}
                        data={item}
                        index={index}
                        cardView={styles.cardView}
                      />
                       {
                        index === 9 &&
                        <TouchableOpacity style={styles.submitButton} onPress={() => this.finalSubmission()}><Text style={styles.submitText}>{i18n.common.submit}</Text></TouchableOpacity>
                      }
                    </View>
                    
                  )
                })
              }
            </SwiperFlatList>
          </View>:
          <Loader/>

        }

      </SafeAreaView>
    );
  }
}



const mapStateToProps = state => ({
  user: state.user
});

// used to connect loginscreen with redux
export default connect(
  mapStateToProps,
  null
)(QuizScreen);

