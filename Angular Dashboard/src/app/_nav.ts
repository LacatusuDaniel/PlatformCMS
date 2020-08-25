import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',

  },

  {
    title: true,
    name: 'Components'
  },


  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-notebook'
  },
  {
    name: 'Templates',
    url: '/templates',
    icon: 'icon-book-open'
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-user'
  },

  {
    name: 'Custom fields',
    url: '/customfieldsgroup',
    icon: 'icon-calculator'
  },
  {
    name: 'Menu',
    url: '/menu',
    icon: 'icon-menu'
  },


  {
    divider: true
  },


];
