import {DrawerLayoutAndroid} from 'react-native';

let drawerRef = null;

const setDrawerRef = ref => {
  drawerRef = ref;
};

const openDrawer = () => {
  if (drawerRef) {
    drawerRef.openDrawer();
  }
};

export {setDrawerRef, openDrawer};
