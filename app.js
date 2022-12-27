import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
  const entrar = () => {
  console.log("entrou")
  console.log(email)
  console.log(password)
 }
 
 return (

    <View style={styles.container}>
      <Text h3>entre nesta porra</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        style={styles}
        onChangeText={value => setEmail(value)} 
        keyboardType="email-adress"
        />
        <Input
        placeholder="Sua Senha"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        style={styles}
        onChangeText={value => setPassword(value)} 
        secureTextEntry={true}
        />
      <Button
      icon={
        <Icon
        name="check"
        size={15}
        color="white"
  />
      }
      title="Entrar"
      onPress={() => entrar()}
  />
    </View>
  );
}

