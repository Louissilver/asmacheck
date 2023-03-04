import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../../components/Title';
import {Paragraph} from '../../components/Paragraph';
import HeaderShape from '../../components/HeaderShape';
import {theme} from '../../styles/globalStyles';
import {AppBar} from '../../components/AppBar';

const HealthMap = navigation => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <HeaderShape />
        <View style={styles.content}>
          <Title>Mapa da saúde</Title>
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
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

export default HealthMap;
