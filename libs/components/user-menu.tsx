import React from 'react';
import { useLocale, tabData } from '@/libs/.';
import { Menu } from '@/components/.';

const UserMenu = (): React.ReactElement => {
  const { locale, tabbar } = useLocale();
  const tabNames = tabData.map((value) => value.name.toLowerCase());

  if (locale === 'u' && tabNames.includes(tabbar)) return <Menu />;
  return <React.Fragment />;
};

export default UserMenu;
