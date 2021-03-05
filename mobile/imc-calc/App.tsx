import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component{
  state = {
    height: 0,
    weigth: 0,
    imc: 0,
    subTitle: ' '
  }
  calc = () => {
    const imc = this.state.weigth / (this.state.height * this.state.height)
    const imcFormat = Math.ceil(imc)

    this.setState({ imc: imcFormat })

    if (imcFormat < 18.5) {
      this.setState({subTitle: 'Magreza'})
    } else if (imcFormat >= 18.5 && imcFormat < 25) {
      this.setState({subTitle: 'Normal'})
    } else if (imcFormat >= 25 && imcFormat < 30) {
      this.setState({subTitle: 'Sobrepeso'})
    } else if (imcFormat >= 30 && imcFormat < 40) {
      this.setState({subTitle: 'Obeseidade'})
    } else if (imcFormat >= 40) {
      this.setState({subTitle: 'Obesidade grave'})
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Seu IMC</Text>
  
        <View style={styles.results}>
          <Text style={styles.imcIndex}>{this.state.imc}</Text>
          <Text style={styles.imcResult}>{this.state.subTitle}</Text>
        </View>
  
        <View>
          <TextInput keyboardType='numeric'
            style={styles.heightInput}
            onChangeText={t => {
              this.setState({height: t.replace(',', '.')});
            }}
            placeholder='Altura'/>
  
          <TextInput
            style={styles.weigthIput} keyboardType='numeric'
            onChangeText={(t) => {
              this.setState({weigth: t.replace(',', '.')});
            }}
            placeholder="Peso"/>
  
          <View style={styles.button}>
            <Button
                title='CALCULAR'
                accessibilityLabel='  Pressione para calcular seu IMC'
                onPress={this.calc}
              >
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
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 40,
  },
  results: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0DEDE",
    width: 280,
    height: 146,
    borderRadius: 8,
  },
  imcIndex: {
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 42,
    color: "#fff",
  },
  imcResult: {
    fontSize: 36,
    lineHeight: 44,
    color: "#fff",
    textAlign: "center",
  },
  heightInput: {
    fontSize: 18,
    backgroundColor: "#E5E5E5",
    borderColor: "#E5E5E5",
    borderBottomColor: "#000",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    height: 57,
    width: 307,
    marginTop: 50,
    padding: 15,
  },
  weigthIput: {
    fontSize: 18,
    backgroundColor: "#E5E5E5",
    borderColor: "#E5E5E5",
    borderBottomColor: "#000",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderWidth: 1,
    height: 57,
    width: 307,
    padding: 15,
    marginTop: 14,
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    width: 307,
    height: 57,
    borderRadius: 8,
    backgroundColor: "#2C3E50",
    marginTop: 30,
  },
});
