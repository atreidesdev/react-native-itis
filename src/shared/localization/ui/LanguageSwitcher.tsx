import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, View} from 'react-native';
import {saveLanguage} from '../languageManager.ts';

export const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation();

  const handleLanguageChange = async () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    await saveLanguage(newLang);
  };

  return (
    <View style={{margin: 10}}>
      <Button title={t('language.change')} onPress={handleLanguageChange} />
    </View>
  );
};
