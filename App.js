import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  addDgt = (n) => {
    this.setState({displayValue: n})
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOpr = (opr) => {

  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            
            <Display value={this.state.displayValue}/>

            <View style={styles.containerBtns}>
              <Button label="1" onClick={ () => this.addDgt(1) } />
              <Button label="2" onClick={ () => this.addDgt(2) } />
              <Button label="3" onClick={ () => this.addDgt(3) } />
              <Button label="4" onClick={ () => this.addDgt(4) } />
              <Button label="5" onClick={ () => this.addDgt(5) } />
              <Button label="6" onClick={ () => this.addDgt(6) } />
              <Button label="7" onClick={ () => this.addDgt(7) } />
              <Button label="8" onClick={ () => this.addDgt(8) } />
              <Button label="9" onClick={ () => this.addDgt(9) } />
              <Button label="0" onClick={ () => this.addDgt(0) } />

              <Button opr label="/" onClick={ () => this.setOpr('/') } />
              <Button opr label="-" onClick={ () => this.setOpr('-') } />
              <Button opr label="*" onClick={ () => this.setOpr('*') } />
              <Button opr label="+" onClick={ () => this.setOpr('+') } />
              <Button opr label="." onClick={ () => this.setOpr('.') } />
              <Button opr label="=" onClick={ () => this.setOpr('=') } />

              <Button spc double label="C" onClick={this.clearMemory} />
              <Button spc double label="AC" onClick={this.clearMemory} />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
