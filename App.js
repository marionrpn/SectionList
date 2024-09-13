import React, { useState } from 'react'; // Adicionado o import do useState
import { StyleSheet, Text, View, SectionList, StatusBar, Switch } from 'react-native'; // Adicionado o import do Switch

const DADOS = [
  {
    titulo: 'Eletrônicos',
    data: ['TV', 'Caixa de Som', 'Toca-discos Retrô']
  },
  {
    titulo: 'Vestuário',
    data: ['Camisas', 'Camisetas', 'Casacos']
  },
  {
    titulo: 'Livros',
    data: ['Ficção', 'Suspense', 'Policiais']
  }
];

const Item = ({ texto, id }) => {
  const [isEnabled, setIsEnabled] = useState(false); // Corrigido o nome da função useState
  return (
    <View style={styles.item}>
      <Switch
        id={id}
        onValueChange={() => setIsEnabled(!isEnabled)} // Corrigido o nome da função setIsEnabled
        value={isEnabled}
      />
      <Text style={styles.titulo}>{texto}</Text>
    </View>
  );
};

const App = () => (
  <View style={styles.container}>
    <SectionList
      sections={DADOS}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, index }) => <Item texto={item} id={index} />} // Adicionado espaço entre texto e id
      renderSectionHeader={({ section: { titulo } }) => (
        <Text style={styles.header}>{titulo}</Text>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#fffccc',
    padding: 20,
    marginVertical: 8,
    elevation: 6,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
  },
});

export default App;