import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../screens/About';
import AccountInformation from '../screens/AccountInformation';
import TermsOfUse from '../screens/TermsOfUse';
import Splashscreen from '../screens/SplashScreen';
import ResultExport from '../screens/ResultsExport';
import Results from '../screens/Results';
import PeakFlowMeter from '../screens/PeakFlowMeter';
import PasswordReset from '../screens/PasswordReset';
import NewAlarm from '../screens/NewAlarm';
import Login from '../screens/Login';
import Home from '../screens/Home';
import HealthMap from '../screens/HealthMap';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import AlarmClock from '../screens/AlarmClock';
import {theme} from '../styles/globalStyles';

const Tab = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Início"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Sobre o aplicativo"
          component={About}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Dados da conta"
          component={AccountInformation}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Alarmes"
          component={AlarmClock}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Cadastro"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Esqueci minha senha"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Mapa da saúde"
          component={HealthMap}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Novo alarme"
          component={NewAlarm}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Redefinição de senha"
          component={PasswordReset}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Teste de PFE"
          component={PeakFlowMeter}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Lista de resultados"
          component={Results}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Exportar resultados"
          component={ResultExport}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Termos de uso"
          component={TermsOfUse}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
