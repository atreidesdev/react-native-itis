import {observer} from 'mobx-react';
import {ThemeSwitcher} from '../shared/theme/ui/ThemeSwitcher.tsx';

export const Settings = observer(() => {
  return <ThemeSwitcher />;
});
