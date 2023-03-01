import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import NewAlarmImage from '../../assets/undraw_time_management_re_tk5w.svg';
import HeaderShape from '../../components/HeaderShape';
import {theme} from '../../styles/globalStyles';

const NewAlarm = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <HeaderShape />
        <View style={styles.content}>
          <Title>Novo alarme</Title>
          <NewAlarmImage width={352} height={250} />
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <Button>Salvar</Button>
          <Button secondary>Cancelar</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.background,
  },
  scroll: {
    width: '100%',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  space: {
    marginTop: 20,
  },
});

export default NewAlarm;
