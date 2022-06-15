import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}
export default class App extends Component {

  state = { ...initialState }

  addDgt = (n) => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOpr = (opr) => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            
            <Display value={this.state.displayValue}/>

            <View style={styles.containerBtns}>

              <Button opr spc fontSpc label="C" onClick={this.clearMemory} />

              <Button opr label="/" onClick={ this.setOpr } />
              <Button opr label="-" onClick={ this.setOpr } />
              <Button opr label="*" onClick={ this.setOpr } />
              <Button opr label="+" onClick={ this.setOpr } />

              <Button opr label='.' onClick={ this.addDgt } />

              <Button label={1} onClick={ this.addDgt } />
              <Button label={2} onClick={ this.addDgt } />
              <Button label={3} onClick={ this.addDgt } />
              <Button label={4} onClick={ this.addDgt } />
              <Button label={5} onClick={ this.addDgt } />
              <Button label={6} onClick={ this.addDgt } />
              <Button label={7} onClick={ this.addDgt } />
              <Button label={8} onClick={ this.addDgt } />
              <Button label={9} onClick={ this.addDgt } />

              <Button double label="0" onClick={ this.addDgt } />
              <Button double label="=" onClick={ this.setOpr } />

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtns: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
