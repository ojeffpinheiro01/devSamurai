import React from 'react';
import {Button, FlatList, View, Text, StyleSheet} from 'react-native';

const App = () => {
  addEntry = () => {
    alert('Abrir tela de adicionar lançamento.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo: $2.102,45</Text>
      <Button title="Adicionar" onPress={addEntry} />

      <Text style={styles.category}>Categorias</Text>
      <FlatList
        data={[
          {key: "Alimentação: $200"},
          {key: "Combustível: $12"},
          {key: "Aluguel: $120"},
          {key: "Lazer: $250"},
          {key: "Outros: $1200"}
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text style={styles.category}>Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'}
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  category: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  entrys: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
