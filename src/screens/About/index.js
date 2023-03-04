import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../../components/Title';
import {Paragraph} from '../../components/Paragraph';
import AppTargetImage from '../../assets/undraw_target_re_fi8j.svg';
import AppPermissionsImage from '../../assets/undraw_subscriptions_re_k7jj.svg';
import AppFeaturesImage from '../../assets/undraw_diet_ghvw.svg';
import AppHowToTestImage from '../../assets/undraw_scientist_3ow3.svg';
import AppCallADoctorImage from '../../assets/undraw_doctor_kw-5-l.svg';
import HeaderShape from '../../components/HeaderShape';
import {theme} from '../../styles/globalStyles';
import {AppBar} from '../../components/AppBar';

const About = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <HeaderShape />
        <View style={styles.content}>
          <Title>Sobre o aplicativo</Title>
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <AppTargetImage width={352} height={250} />
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <AppPermissionsImage width={352} height={250} />
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <AppFeaturesImage width={352} height={250} />
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <AppHowToTestImage width={352} height={250} />
          <Paragraph>
            Lörem ipsum pseudos reavis om diaheten tetranade. Repel polypol, il
            dedeheten i ryde. Far kropolig till egode kägt. Nösk lasengar lalång
            är elgasbil det exodynat.{' '}
          </Paragraph>
          <AppCallADoctorImage width={352} height={250} />
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

export default About;
