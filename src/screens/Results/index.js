import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {Paragraph} from '../../components/Paragraph';
import ResultsEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import HeaderShape from '../../components/HeaderShape';
import {theme} from '../../styles/globalStyles';
import {AppBar} from '../../components/AppBar';

const Results = navigation => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <HeaderShape />
        <View style={styles.content}>
          <Title>Resultados</Title>
          <ResultsEmptyChartImage width={352} height={250} />
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <Button>Ver mais</Button>
          <Button secondary>Exportar lista</Button>
        </View>
      </ScrollView>
      <AppBar navigation={navigation} />
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

export default Results;
