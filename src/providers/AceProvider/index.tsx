import React from 'react';
import { SnackbarProvider } from 'notistack';
import { EchoProvider, EchoRecord } from '@ricardo-jrm/echo';
import { FuryProvider, FuryRecord } from '@ricardo-jrm/fury';
import { PainProvider, PainRecord } from '@ricardo-jrm/pain';

/**
 * AceProviderProps
 */
export interface AceProviderProps {
  children: JSX.Element;
  locales: EchoRecord;
  localesDefault: string;
  metas: PainRecord;
  metasDefault: string;
  themes: FuryRecord;
  themesDefault: string;
}

/**
 * AceProvider
 */
export const AceProvider = ({
  children,
  locales,
  localesDefault,
  metas,
  metasDefault,
  themes,
  themesDefault,
}: AceProviderProps) => (
  <SnackbarProvider maxSnack={3}>
    <EchoProvider echo={locales} echoDefault={localesDefault}>
      <PainProvider pain={metas} painDefault={metasDefault}>
        <FuryProvider fury={themes} furyDefault={themesDefault}>
          {children}
        </FuryProvider>
      </PainProvider>
    </EchoProvider>
  </SnackbarProvider>
);
