import { AceProvider } from '../src';
import { locales } from '../src/cfg/locales';
import { metas } from '../src/cfg/metas';
import { themes } from '../src/cfg/themes';

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
