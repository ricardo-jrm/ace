import { ThemeOptions } from '@mui/material';
import { typography } from '../typography';
import { overrides } from '../overrides';

export const nebula: ThemeOptions = {
  typography,
  palette: {
    primary: {
      light: '#b3b0cf',
      main: '#807CAE',
      dark: '#2A293B',
    },
    secondary: {
      light: '#dd70a5',
      main: '#d54d8f',
      dark: '#8c4573',
    },
  },
  components: overrides,
};
