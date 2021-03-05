import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

export default class App extends React.Component {
  state = {
    height: 0,
    weigth: 0,
    imc: 0,
    subTitle: ' ',
    color: '#BDC3C7'
  }
  calc = () => {
    const imc = this.state.weigth / (this.state.height * this.state.height)
    const imcFormat = Math.ceil(imc)

    this.setState({ imc: imcFormat })

    if (imcFormat < 18.5) {
      this.setState({ subTitle: 'Magreza', color: '#E74C3C' })
    } else if (imcFormat >= 18.5 && imcFormat < 25) {
      this.setState({ subTitle: 'Normal', color: '#2ECC71' })
    } else if (imcFormat >= 25 && imcFormat < 30) {
      this.setState({ subTitle: 'Sobrepeso', color: '#F1C40F' })
    } else if (imcFormat >= 30 && imcFormat < 40) {
      this.setState({ subTitle: 'Obeseidade', color: '#E67E22' })
    } else if (imcFormat >= 40) {
      this.setState({ subTitle: 'Obesidade grave', color: '#E74C3C' })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Seu IMC</Text>

        <View style={[styles.results, { backgroundColor: this.state.color }]}>
          <Text style={styles.imcIndex}>{this.state.imc}</Text>
          <Text style={styles.imcResult}>{this.state.subTitle}</Text>
        </View>

        <View>

          <TextInput
            style={styles.weigthIput} keyboardType='numeric'
            label="peso"
            onChangeText={(t) => {
              this.setState({ weigth: t.replace(',', '.') });
            }}
            placeholder="Peso" />

          <TextInput keyboardType='numeric'
            style={styles.heightInput}
            label='altura'
            onChangeText={t => {
              this.setState({ height: t.replace(',', '.') });
            }}
            placeholder='Altura' />

          <View>
            <Button onPress={this.calc}
              mode='contained'
              accessibilityLabel='  Pressione para calcular seu IMC'
               >
              CALCULAR
            </Button>
          </ View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    backgroundColor: '#eee'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  results: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 280,
    height: 146,
    marginVertical: 10,
    padding: 8
  },
  imcIndex: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  imcResult: {
    textAlign: 'center',
    fontSize: 16,
  },
  heightInput: {
    marginVertical: 10
  },
  weigthIput: {
    marginVertical: 10
  }
});
