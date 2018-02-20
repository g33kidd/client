import createTheme from 'styled-components-theme';

export const colors = {
  dark1: '#1e2532',
  dark2: '#293042',
  text1: '#e4e4e4',
  accent1: '#394158',
  accent2: '#8a919d',
  green: '#009688',
  gold: '#cdb826',
  danger: '#af5959',
  google: '#DB4437',
  vk: '#507299',
  twitch: '#6542a6',
  ravepro: '#60CCBF',
  soundcloud: '#f68b42',
  siteStaff: '#c27979',
  roomStaff: '#79c2bc'
};

export const theme = createTheme(...Object.keys(colors));