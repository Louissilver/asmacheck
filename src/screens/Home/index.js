import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../../components/Title';
import HomeEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import HeaderShape from '../../components/HeaderShape';
import {theme} from '../../styles/globalStyles';
import {AppBar} from '../../components/AppBar';
import Header from '../../components/Header';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <Header isHome title={'Início'} />
        <HeaderShape />
        <View style={styles.content}>
          <Title>Início</Title>
          <HomeEmptyChartImage width={352} height={250} />
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

export default Home;
