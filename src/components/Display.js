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

const styles = StyleSheet.create({
    display: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
        alignItems: 'flex-end',
        padding: 30,
        width: '100%'
    },
    displayValue: {
        fontSize: 50,
        color: '#7e7'
    }
})