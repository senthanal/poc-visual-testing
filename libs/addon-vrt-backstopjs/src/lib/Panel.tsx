import React from 'react';
import { AddonPanel } from '@storybook/components';
import { useGlobals, useStorybookApi } from '@storybook/manager-api';

export const VrtBackstop = ({active}) => {
  const [globals] = useGlobals();
  const api = useStorybookApi();
  console.log("Globals:", globals);
  console.log("API:", api);
  console.log("My Custom Panel Rendered");
  // Add your logic here
  return <AddonPanel active={active}>
    <div>My Custom Panel</div>
  </AddonPanel>;
};
