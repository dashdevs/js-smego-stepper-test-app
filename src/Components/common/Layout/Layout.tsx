import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { LayoutContent } from './Layout.style';

type LayoutT = {
  children: React.ReactElement | Array<React.ReactElement>;
  styles?: FlattenSimpleInterpolation;
};

export type PageContentT = Omit<LayoutT, 'children'>;

const Layout = ({ children, styles }: LayoutT) => {
  return <LayoutContent styles={styles}>{children}</LayoutContent>;
};

export default Layout;
