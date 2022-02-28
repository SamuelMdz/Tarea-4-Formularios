import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, StyleSheet, Alert, SafeAreaView, FlatList} from 'react-native';
import UserList from './src/components/User/userList';


const App = () => {
  const [numerocuenta,  setNumerocuenta] = useState(0);
  const [telefono, setTelefono] =useState(0);
  const [hobby, setHobby] = useState("");
  const [favoriteFood, setFfood] = useState("");
  const [borncity, setCity] = useState("");

  const updateNcuenta = (value) =>{
    setNumerocuenta(value);
  };
  const updateTelefono = (value) =>{
    setTelefono(value);
  };
  const updateHobby = (value) =>{
    setHobby(value);
  };
  const updateFfood = (value) =>{
    setFfood(value);
  };
  const updateCity = (value) =>{
    setCity(value);
  };
  
  let [obtData, setData] = useState([]);

  useEffect(() => {
    fetch('https://calculadora-server.herokuapp.com/alumns')
    .then(response => response.json())
    .then(data => {
      console.log('Success:',data);
      setData(data);
    });
  },[])

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      
    },
  });
  const styles2 = StyleSheet.create({
    tittle: {
      fontSize: 20,
      margin: 2,
      padding: 6,
      
    },
  });
  
  const peticion = () =>{
    var url = 'https://calculadora-server.herokuapp.com/alumns'
    const body={
      accountNumber : parseInt(numerocuenta),
      phone : parseInt(telefono),
      hobby : hobby,
      favoriteFood : favoriteFood,
      bornCity : borncity,
  
    };
    fetch(url, {
      method:'PUT',
      body: JSON.stringify(body),
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error',error))
    .then(response => Alert.alert('Los datos se actualizaron correctamente'));
  };
  return(
    <View >
    
      <TextInput
        style={styles.input}
        onChangeText={updateNcuenta}
        placeholder="Numero de cuenta"
      />
      <TextInput
        style={styles.input}
        onChangeText={updateTelefono}
        placeholder="Telefono"
      />
      <TextInput
        style={styles.input}
        onChangeText={updateHobby}
        placeholder="Hobby"
      />
      <TextInput
        style={styles.input}
        onChangeText={updateFfood}
        placeholder="Conida Favorita"
      />
      <TextInput
        style={styles.input}
        onChangeText={updateCity}
        placeholder="Ciudad de Nacimiento"
      />
      <Button title='CLick' onPress={peticion}></Button>

      <SafeAreaView>
        <FlatList 
          data = {obtData}
          renderItem={({item}) => <UserList user={item}/>}
          keyExtractor = {(item) => item.id}
          ListHeaderComponent = {() => <Text style={styles2.tittle}>USERS</Text>}
        />
      </SafeAreaView>
    </View>
  )   
};

export default App;