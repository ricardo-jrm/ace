import { FuryRecord } from '@ricardo-jrm/fury';
import { ace } from './ace';
import { aceDark } from './ace-dark';
import { fury } from './fury';
import { furyDark } from './fury-dark';
import { nebula } from './nebula';
import { nebulaDark } from './nebula-dark';

export const themes: FuryRecord = {
  ace,
  fury,
  nebula,
  'ace-dark': aceDark,
  'fury-dark': furyDark,
  'nebula-dark': nebulaDark,
};
