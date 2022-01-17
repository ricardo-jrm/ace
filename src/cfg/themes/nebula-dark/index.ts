import { ThemeOptions } from '@mui/material';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const nebulaDark: ThemeOptions = {
  typography,
  palette: {
    mode: 'dark',
    primary: {
      light: '#dd70a5',
      main: '#d54d8f',
      dark: '#2A293B',
    },
    secondary: {
      light: '#b3b0cf',
      main: '#807CAE',
      dark: '#8c4573',
    },
  },
  components: overrides,
};
