import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

/**
 * Link props
 */
export interface LinkProps extends TypographyProps {
  external?: boolean;
  href: string;
}

/**
 * Link
 */
export const Link = ({ children, external, href, ...propsTypo }: LinkProps) => {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const linkComponent = (
    <MuiLink href={href} {...linkProps}>
      {children}
    </MuiLink>
  );
  if (external) {
    return <Typography {...propsTypo}>{linkComponent}</Typography>;
  }
  return (
    <Typography {...propsTypo}>
      <NextLink href={href} passHref>
        {linkComponent}
      </NextLink>
    </Typography>
  );
};
