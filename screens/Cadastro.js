import React, { useState, useEffect } from "react";
import {  View, StyleSheet, Platform } from 'react-native';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';
import { TextInputMask,  } from "react-native-masked-text";
import { KeyboardAvoidingView, ScrollView } from "react-native-web";
import usuarioService from "../services/UsuarioService";


export default function Cadastro({navigation}) {

    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [senha, setSenha] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [isSelected, setSelected] = useState(false)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorCpf, setErrorCpf] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const [errorTelefone, setErrorTelefone] = useState(null)
    const [isLoading, setLoading] = useState(false)

    let cpfField = null
    let telefoneField = null

    const validateEmail = (email) => {
    }
    
    const validar = () => {
      let error = false
      setErrorEmail(null)
      setErrorCpf(null) 
      setErrorSenha(null)
   
      
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
      if (!re.test(String(email).toLowerCase())){
        setErrorEmail("Preencha seu e-mail direitokrl")
        error = true
   
      }
      if (!cpfField.isValid()){
        setErrorCpf("Preencha seucpf direito fdp")
        error = true
    }
    if (telefone == null){
      setErrorTelefone("Preencha seutelefoune direito fdp")
      error = true
  }
  if (senha == null){
    setErrorSenha("Preencha suasenha direito fdp")
    error = true
}
    return !error
  }

    const salvar = () => {
      if (validar()){
        setLoading(true)

      let data = {
        email: email,
        cpf: cpf,
        nome: nome,
        telefone: telefone,
        senha: senha,
      }
      usuarioService.cadastrar(data)
      .then((response) => {
        setLoading(false)
          console.log(response.data)
      })
      .catch((error)=> {
        setLoading(false)
        console.log(error)
        console.log("Eroooou")
      })
    }
  }

   
   return (
  
      <KeyboardAvoidingView 
      behavior={Platform.OS == "android" ? "padding" : "height"}
      style={[styles.container, specificStyle.specificContainer]}
       ketboardVerticalOffset={80}>
       <ScrollView style={{widht: "100%"}}>
        <Text h3>Cadastre-se</Text>
        <Input
          placeholder="E-mail"
          onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
          }}
          keyboardType="email-adress"
          errorMessage={errorEmail}
          />

            <Input
          placeholder="Nome"
          onChangeText={value => setNome(value)} 
          errorMessage={errorNome}          />

        <View style={styles.containerMask} >
          <TextInputMask
            placeholder="CPF"
            type={'cpf'}
            value={cpf}
            onChangeText={value => {
              setCpf(value)
              setErrorCpf(null)
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.maskedInput}
            ref={(ref) => cpfField = ref}
            />
            </View>
            <Text style={styles.errorMessage}>{errorCpf}</Text>

            <View style={styles.containerMask} >
          <TextInputMask
            placeholder="Telefone"
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={telefone}
            onChangeText={value => setTelefone(value)} 
             keyboardType="phone-pad"
              returnKeyType="done"
            style={styles.maskedInput}
            ref={(ref) => telefoneField = ref}
            />
            </View>
            <Text style={styles.errorMessage}>{errorTelefone}</Text>

            <Input
          placeholder="Senha"
          onChangeText={value => setSenha(value)} 
          errorMessage={errorSenha}
          secureTextEntry={true}
          />

          <CheckBox 
              title="Eu aceito os termos de uso"
              checkedIcon="check"
              uncheckedIcon="square-o"
              checkedColor="green"
              uncheckedColor="red"
              checked={isSelected}
              onPress={() => setSelected(!isSelected)}          
          />

          { isLoading &&
            <Text>Carreganu..</Text>
          }
        { !isLoading &&
        <Button
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
    />
        }
        title="Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
    />
      }
    </ScrollView>
      </KeyboardAvoidingView>
    );
}

  const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff",
      padding:10,
    },
    button: {
        width: '100%',
        marginTop: 10
    },
  })