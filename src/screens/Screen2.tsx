import {observer} from 'mobx-react';
import React from 'react';
import { View} from 'react-native';
import {Entitie2} from '../entities/entitie2/ui/Entitie2.tsx';

export const Screen2 = observer(() => {
  return (
    <View>
        <Entitie2/>
    </View>
  );
});
