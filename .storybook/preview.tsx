import { AceProvider } from '../src';
import { locales, metas, themes } from '@ricardo-jrm/mesmer';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AceProvider
      locales={locales}
      metas={metas}
      themes={themes}
      localesDefault="en"
      metasDefault="nebula"
      themesDefault="nebula"
    >
      {Story()}
    </AceProvider>
  ),
];
