import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../styles/globalStyles';
import styles from './styles';

const AppBar = ({navigation}) => {
  return (
    <View style={styles.navigation}>
      <TouchableOpacity style={styles.button}>
        <Icon name="bars" size={40} color={theme.textContrastMain} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Teste de PFE')}
        style={styles.centralButton}>
        <View style={styles.button}>
          <Icon name="flask" size={40} color={theme.main} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Dados da conta')}
        style={styles.button}>
        <Icon name="user" size={40} color={theme.textContrastMain} />
      </TouchableOpacity>
    </View>
  );
};

export {AppBar};
