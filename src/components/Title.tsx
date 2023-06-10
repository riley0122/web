import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';

export const Title: FC<
  PropsWithChildren<{ noDivider?: boolean; reverse?: boolean }>
> = ({ noDivider, children, reverse }) => {
  const divider = children && !noDivider ? '|' : '';

  let convertedChildren = children?.toString();

  if (Array.isArray(children)) {
    convertedChildren = children.join(' ');
  }

  let titleGroups = [convertedChildren, divider, 'stats.fm'];
  if (reverse) titleGroups = titleGroups.reverse();

  const title = titleGroups.join(' ').trim();

  return (
    <Head>
      <title>{title}</title>
      <meta key="huts" property="og:title" content={title} />
    </Head>
  );
};
