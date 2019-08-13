
import {
  QUIZ,
  quiz
} from '../actions/user-actions-types';
import axios from 'axios';
import {Connection}from '../config/connection'

const initialState = {
 quizQuestions:null
};

export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case QUIZ:
    let data = payload.map((item, index)=>{
      let dataReq=[...item.incorrect_answers,item.correct_answer]
      let dataModified=dataReq.map((item, index) => {
        return {
            option: item,
            isChecked: false
        }
    })
      return(
        {
          questions:item.question,
          option:dataModified,
          answer:item.correct_answer,
          index:index
        }
      );
    })
      return {
        ...state,
        quizQuestions:data
      };
    default:
      return state;
  }
}

/********* API to signup user ************/
export const getQuiz = () => {
  let url = Connection;
  return dispatch => {
    return axios
      .get(url)
      .then(res => {
        dispatch(quiz(res.data.results));
      })
      .catch((error) => {
        dispatch(quiz(error));
      });
  };
};
