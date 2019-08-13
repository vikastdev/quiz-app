import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { Colors, i18n } from '../../constants'
export default class ScoreScreen extends React.Component {

    onReplay = () => {
        this.props.navigation.navigate('QuizStartScreen')
    }

    render() {
        const { data } = this.props.navigation.state.params
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={[styles.subContainer]}>
                    <View>
                        <Text style={styles.scoreText}>{`${i18n.common.score}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.scoreText}>{`${data.score}`}</Text>
                    </View>
                </View>
                <View style={[styles.subContainer]}>
                    <View>
                        <Text style={styles.scoreText}>{`${i18n.common.timeTaken}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.scoreText}>{`${data.quizTime}`}</Text>
                    </View>

                </View>
                <TouchableOpacity style={styles.replayButton} onPress={() => this.onReplay()}>
                    <Text style={[styles.scoreText, { color: Colors.steel_grey, fontWeight: '300' }]}>{`${i18n.common.replay}`}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}




