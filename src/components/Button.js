import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

export default props => {

    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.btnDouble)
    if (props.triple) stylesButton.push(styles.btnTriple)
    if (props.opr) stylesButton.push(styles.oprBtn)
    if (props.spc) stylesButton.push(styles.spc)

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={stylesButton}>{props.label || 'Sem valor'}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 6,
    padding: 15,
    backgroundColor: '#7e7e7e',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#1e1e1e',
  },
  oprBtn: {
    backgroundColor: '#7e7e'
  },
  btnDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  btnTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
  spc: {
    backgroundColor: '#ff0',
    color: "#000"
  }
});
