import React from "react";
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default (props) => {
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}

const mg = 10

const styles = StyleSheet.create({
    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: mg,
        marginBottom: mg,
    },
    displayValue: {
        fontSize: 90,
        color: '#222'
    }
})