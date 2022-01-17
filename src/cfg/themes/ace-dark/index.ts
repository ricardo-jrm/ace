import { ThemeOptions } from '@mui/material';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const aceDark: ThemeOptions = {
  typography,
  palette: {
    mode: 'dark',
    primary: {
      dark: '#212121',
      main: '#9e9e9e',
      light: '#f5f5f5',
    },
    secondary: {
      dark: '#263238',
      main: '#607d8b',
      light: '#cfd8dc',
    },
  },
  components: overrides,
};
