import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const SideMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage} />
        <Text style={styles.userName}>Sarah Williams</Text>
      </View>
      <View style={styles.itensContainer}>
        <TouchableOpacity
          onPress={navigation.navigate('Início')}
          style={styles.item}>
          <Icon name="home" style={styles.icon} />
          <Text style={styles.text}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Dados da conta')}
          style={styles.item}>
          <Icon name="user" style={styles.icon} />
          <Text style={styles.text}>Dados da conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Alarmes')}
          style={styles.item}>
          <Icon name="bell" style={styles.icon} />
          <Text style={styles.text}>Alarmes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Mapa da saúde')}
          style={styles.item}>
          <Icon name="heartbeat" style={styles.icon} />
          <Text style={styles.text}>Mapa da saúde</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Teste de PFE')}
          style={styles.item}>
          <Icon name="check-square" style={styles.icon} />
          <Text style={styles.text}>Teste de PFE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Lista de resultados')}
          style={styles.item}>
          <Icon name="list-ul" style={styles.icon} />
          <Text style={styles.text}>Lista de resultados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Sobre o aplicativo')}
          style={styles.item}>
          <Icon name="info" style={styles.icon} />
          <Text style={styles.text}>Sobre do aplicativo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigation.navigate('Login')}
          style={styles.item}>
          <Icon name="sign-out" style={styles.icon} />
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
