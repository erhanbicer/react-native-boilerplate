import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as PersistProvider } from 'redux-persist/integration/react';
import codePush from 'react-native-code-push';
import Router from './router';
import { persistor, store } from './store/configureStore';
import { useDimensions } from './hooks/useDimensions';

const StoreApp = () => {
   return (
      <ReduxProvider store={store}>
         <PersistProvider loading={null} persistor={persistor}>
            <App />
         </PersistProvider>
      </ReduxProvider>
   );
};

const App = () => {
   useDimensions();

   return (
      <SafeAreaView style={styles.globalContainer}>
         <Router />
      </SafeAreaView>
   );
};

const codePushOptions = {
   /*updateDialog: {
      title: '',
      appendReleaseDescription: true,
      descriptionPrefix: '',
      mandatoryUpdateMessage: '',
      mandatoryContinueButtonLabel: '',
      optionalIgnoreButtonLabel: '',
      optionalInstallButtonLabel: ',
      optionalUpdateMessage: ''
   },*/
   checkFrequency: codePush.CheckFrequency.ON_APP_START
};

const CodeApp = __DEV__ ? StoreApp : codePush(codePushOptions)(StoreApp);

export default CodeApp;

const styles = StyleSheet.create({
   globalContainer: { flex: 1 }
});
