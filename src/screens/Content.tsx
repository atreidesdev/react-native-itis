import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../shared/theme/model/hooks.ts';
import {useTranslation} from 'react-i18next';

export const Content = observer(() => {
  const {Colors} = useTheme();
  const {t} = useTranslation();
  const styles = createStyles(Colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('text.example')}</Text>
    </View>
  );
});

const createStyles = (Colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: Colors.background,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.textPrimary,
    },
  });
