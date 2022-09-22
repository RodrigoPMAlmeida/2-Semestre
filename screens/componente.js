import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Componente1() {
  return (
    <SafeAreaView style={styles.geral}>
      <Text style={styles.text} >
        Texto Maroto
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  geral:{
    backgroundColor: 'lightgray',
    height: '50%',
    margin: 20
  },
  text: {
    fontSize:35,
    color: 'blue',
    padding: 20
  }

});
