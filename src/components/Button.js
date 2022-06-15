import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight, View} from 'react-native';

export default props => {

    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.btnDouble)
    if (props.opr) stylesButton.push(styles.oprBtn)
    if (props.spc) stylesButton.push(styles.spc)

    const fontSpc = []

    if (props.fontSpc) fontSpc.push(styles.fontSpc)

  return (
    <TouchableHighlight style={stylesButton} onPress={() => props.onClick(props.label)}>
      <Text style={[styles.buttonValue, fontSpc]}>{props.label || 'N'}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 8,
    padding: 15,
    backgroundColor: '#7e7e7e',
    color: '#fff',
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: '#1e1e1e',
    borderRadius: 50,
    margin: 13
  },
  buttonValue:{
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  oprBtn: {
    backgroundColor: '#555',
    width: Dimensions.get('window').width / 8,
    height: Dimensions.get('window').height / 10,
    padding: 0,
    margin: 3
  },
  btnDouble: {
    width: Dimensions.get('window').width / 2.5,
  },
  spc: {
    backgroundColor: '#ff9444',
  },
  fontSpc: {
    color: '#000'
  }
});
