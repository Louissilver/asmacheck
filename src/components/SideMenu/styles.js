import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.secondary,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#c3c3c3',
    marginHorizontal: 96,
    marginTop: 37,
    marginBottom: 5,
  },
  userName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 36,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  itensContainer: {
    padding: 20,
    justifyContent: 'space-around',
    height: '70%',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopColor: theme.black,
    paddingTop: 14,
    paddingBottom: 20,
    borderTopWidth: 1,
  },
  icon: {
    fontSize: 25,
    marginLeft: 5,
    marginRight: 20,
    width: 25,
    color: theme.main,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: theme.textContrastSecondary,
    marginRight: 10,
  },
});
