import AsyncStorage from '@react-native-community/async-storage'

export const isInitialized = async () => {
  const openingBalance = await AsyncStorage.getItem('openingBalance')
  return openingBalance !== null && openingBalance === 'true'
};

export const setInitialized = async () => {
  await AsyncStorage.setItem('openingBalance', 'true')
};

export const cleanInitialized = async () => {
  await AsyncStorage.removeItem('openingBalance')
}