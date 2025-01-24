import {observer} from 'mobx-react';
import {LanguageSwitcher} from '../shared/localization/ui/LanguageSwitcher.tsx';
import {ThemeSwitcher} from '../shared/theme/ui/ThemeSwitcher.tsx';

export const Settings = observer(() => {
  return (
    <>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </>
  );
});
