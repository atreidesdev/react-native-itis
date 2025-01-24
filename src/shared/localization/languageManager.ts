import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './i18n.ts';

const LANGUAGE_KEY = 'language';

export const loadLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
  if (savedLanguage) {
    await i18n.changeLanguage(savedLanguage);
  }
};

export const saveLanguage = async (language: string) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
  await i18n.changeLanguage(language);
};
