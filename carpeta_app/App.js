import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ListaPost from './src/ListaPost';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function PantallaInicioPrueba({navigation}){
  return(
    <View style = {styles.container}>
      <Image resizeMode = 'contain' style = {styles.formatoimagen} source={{uri: 'https://img.freepik.com/vector-gratis/arbol-aislado-sobre-fondo-blanco_1308-26130.jpg'}}></Image>
      <Text style = {styles.titulo} >Bienvenido al Blogreact</Text>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p1')}>
        <Text style={styles.textoboton}>Ir a Pantalla 1</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p2')}>
        <Text style={styles.textoboton}>Ir a Pantalla 2</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>
        {navigation.navigate('p3',{
          numId: 15, 
          nombre: 'nombre y apellido completo'});
        }}>
        <Text style={styles.textoboton}>Ir a Pantalla 3</Text>
      </Pressable>
    </View>
  );
}

function PantallaInicio({navigation}){
  return(
    <View style = {styles.container}>
      <Image resizeMode = 'contain' style = {styles.formatoimagen} source={{uri: 'https://img.freepik.com/vector-gratis/arbol-aislado-sobre-fondo-blanco_1308-26130.jpg'}}></Image>
      <Text style = {styles.titulo} >Bienvenido al Blogreact</Text>
      <ListaPost/>
    </View>
  );
}

function Pantalla1({navigation}){
  return(
    <View>
      <Text style = {styles.titulo} >Pantalla 01</Text>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p2')}>
        <Text style={styles.textoboton}>Ir a Pantalla 2</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>
        {navigation.navigate('p3',{
          numId: 15, 
          nombre: 'nombre y apellido completo'});
        }}>
        <Text style={styles.textoboton}>Ir a Pantalla 3</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>navigation.goBack()}>
        <Text style={styles.textoboton}>Volver</Text>
      </Pressable>
    </View>
  );
}

function Pantalla2({navigation}){
  return(
    <View>
      <Text style = {styles.titulo} >Pantalla 01</Text>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p1')}>
        <Text style={styles.textoboton}>Ir a Pantalla 1</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p3')}>
        <Text style={styles.textoboton}>Ir a Pantalla 3</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>navigation.goBack()}>
        <Text style={styles.textoboton}>Volver</Text>
      </Pressable>
    </View>
  );
}

function Pantalla3({route, navigation}){
  const {numId, nombre}=route.params;
  return(
    <View>
      <Text style = {styles.titulo} >Pantalla 03</Text>
      <Text style = {styles.titulo} >Código de usuario: {JSON.stringify(numId)} </Text>
      <Text style = {styles.titulo} >Nombre Completo: {JSON.stringify(nombre)}</Text>


      <Text style = {styles.titulo} >Pantalla 01</Text>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p1')}>
        <Text style={styles.textoboton}>Ir a Pantalla 1</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>navigation.navigate('p2')}>
        <Text style={styles.textoboton}>Ir a Pantalla 2</Text>
      </Pressable>
      <Pressable style={styles.botones} onPress={()=>navigation.goBack()}>
        <Text style={styles.textoboton}>Volver</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: 'BlogXXXX'}}>
        <Stack.Screen name='inicio' component={PantallaInicio} options={{title:'Inicio'}}/>
        <Stack.Screen name='p1' component={Pantalla1} options={{title:'Pantalla1'}}/>
        <Stack.Screen name='p2' component={Pantalla2} options={{title:'Pantalla2'}}/>
        <Stack.Screen name='p3' component={Pantalla3} options={{title:'Pantalla3'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formatoimagen: {
    width: 200,
    height: 200,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  botones: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textoboton: {
    fontsize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
