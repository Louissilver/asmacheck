import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import HeaderShape from '../../components/HeaderShape';
import {theme} from '../../styles/globalStyles';
import Header from '../../components/Header';
import {AppBar} from '../../components/AppBar';

const PeakFlowMeter = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <Header title={'Teste de PFE'} />
        <HeaderShape />
        <View style={styles.content}>
          <Title>Medidor de Pico de Fluxo</Title>
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <Button>Gerar resultado</Button>
        </View>
      </ScrollView>
      <AppBar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.background,
    height: '100%',
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

export default PeakFlowMeter;
