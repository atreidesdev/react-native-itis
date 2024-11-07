import {observer} from 'mobx-react';
import { View} from 'react-native';
import {Entitie1} from '../entities/entitie1/ui/Entitie1.tsx';

export const Screen1 = observer(() => {
  return (
    <View>
      <Entitie1/>
    </View>
  );
});
