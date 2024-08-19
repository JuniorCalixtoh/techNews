import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, ScrollView,TextInput,TouchableOpacity } from 'react-native';
import { useState } from 'react';





export default function login(){
  return(
    <ScrollView>
    
    
    <Image style={styles.image} source={{uri: '/assets/images/PRO1.jpg'}} />
  
    <View style={styles.container}>
     
      <Text style={{fontSize:40,color:'#AADDEE'}}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Usuário, Email & Número Telefone" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Esqueceu sua Senha?</Text>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
         
          
          <Image style={styles.image} source={require('@/assets/images/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
         
          <Image style={styles.imageg} source={require('@/assets/images/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        
          <Image style={styles.imagea} source={require('@/assets/images/apple.png')} />
          
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Link style={{color: '#00008B', margin: 10}} href={{ pathname: '/', params: { name: 'Voltar' } }}>CONTINUA SEM LOGIN</Link>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius:30,
  },
  imageg: {
    width: 40,
    height: 40,
    borderRadius:30,
  },
  imagea: {
    width: 40,
    height: 40,
    borderRadius:30,
    marginTop: -5,
  },
  header: {
    fontSize: 24,
    color: '#FFFFFF',
    backgroundColor: '#00008B',
    width: '100%',
    textAlign: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#ffff',
    padding: 15,
    marginVertical: 10,
    
  },
  button: {
    backgroundColor: '#AADDEE',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#00008B',
    marginVertical: 10,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 10,
  },
  socialButton: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  socialText: {
    fontSize: 16,
  },
  continueWithoutLogin: {
    color: '#00008B',
    textDecorationLine: 'underline',
  },
});