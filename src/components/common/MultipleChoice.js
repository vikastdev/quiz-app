import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'react-native-check-box'
import EventsEmitter from '../../utilities/Event';
import { Colors } from '../../constants'

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            options: props.data.option
        }
    }

    //function on select checkbox
    onCheckBox = (item, index) => {
        let dataClone = this.state.options
        let dataModified = dataClone.map((data, indexReq) => {
            if (indexReq === index || data.isChecked === true) {
                return (
                    {
                        option: data.option,
                        isChecked: !data.isChecked
                    }
                )
            }
            else {
                return data
            }
        })
        this.setState({ options: [...dataModified] })

        if (item.option === this.state.data.answer && dataClone[index].isChecked === false) {
            EventsEmitter.emit('onCorrect', { item, index });
        }
        if (item.option === this.state.data.answer && dataClone[index].isChecked === true) {
            EventsEmitter.emit('oninCorrect', { item, index });
        }
        dataClone.map((item, index) => {
            if (item.option === this.state.data.answer && item.isChecked === true) {
                EventsEmitter.emit('oninCorrect', { item, index });
            }
        })

    }

    render() {
        const { cardView, index, multipleContainer, questionText, questionTextTitle } = this.props
        const { data, options } = this.state
        return (
            <View style={cardView}>
                <Text style={questionTextTitle}>{`${'Question'} ${'-'} ${index + 1}`}</Text>
                <Text style={questionText} numberOfLines={8}>{`${data.questions}`}</Text>
                {
                    options.map((item, index) => {
                        return (
                            <View style={multipleContainer}>
                                <View style={{ flexDirection: 'row', paddingTop: 9 }} >
                                    <CheckBox
                                        style={{ flex: 1 }}
                                        onClick={() => {
                                            this.onCheckBox(item, index)
                                        }}
                                        isChecked={item.isChecked}
                                        leftText={`${item.option}`}
                                        leftTextStyle={questionText}
                                        checkedCheckBoxColor={Colors.yellow_background}
                                    />
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

export default MultipleChoice
