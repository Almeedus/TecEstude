import { Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import { styles } from './styles'

export function Home(){
  
  




  return(
    <View style = {styles.container}>

      <Image style = {styles.logo}
      source={require('./assets/logo.png')}
      />

      <TextInput style={styles.entradaDado}
      placeholder = "Email"
      placeholderTextColor={'#4B4B4B'}
      textAlign = 'center'
      keyboardType='email-address'/>
      <TextInput style={styles.entradaDado}
      placeholder = "Senha"
      placeholderTextColor={'#4B4B4B'}
      textAlign = 'center'
      secureTextEntry
      />

      <TouchableOpacity style = {styles.botao}>
        <Text style = {styles.TextoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.cadastro}>
          Não tem uma conta? Cadastre-se agora
        </Text>
      </TouchableOpacity>
    </View>
  );
}