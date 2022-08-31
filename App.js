import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Button,
  PermissionsAndroid,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncreaseButtonPress = () => {
    setCounter(currentCounter => currentCounter + 1);
  };

  const handlePermissionButtonPress = async () => {
    try {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Title',
          message: 'Message',
        },
      );

      Alert.alert('Permission status', status);
    } catch (error) {
      Alert.alert(error?.message || 'Unknown error');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.buttonWrapper}>
        <Button
          title={`Increase ${counter}`}
          onPress={handleIncreaseButtonPress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Permission" onPress={handlePermissionButtonPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 40,
  },
});

export default App;
