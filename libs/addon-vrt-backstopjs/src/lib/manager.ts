import { addons, types } from '@storybook/manager-api';
import { VrtBackstop } from './Panel';

addons.register('my-addon/panel', () => {
  addons.add('my-addon/panel', {
    title: 'My Custom Panel',
    type: types.PANEL,
    render: VrtBackstop as any, // Cast to any to avoid type issues
  });
});
