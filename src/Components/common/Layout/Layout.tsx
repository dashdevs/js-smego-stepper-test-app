import styled, { FlattenSimpleInterpolation } from 'styled-components';
import React from 'react';

const PageContent = styled.div<PageContentT>`
  align-items: center;
  max-width: 1560px;
  padding: 0 15px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  grid-template-rows: max-content;
  ${(props) => props.styles};

  @media (max-width: 1440px) {
    grid-column-gap: 30px;
  }

  @media (max-width: 1024px) {
    max-width: 991px;
  }

  @media (max-width: 767px) {
    max-width: auto;
    padding: 0 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
`;

export const FirstColumnContent = styled.div`
  grid-column: 1/4;

  @media (max-width: 1024px) {
    grid-column: 1/3;
  }

  @media (max-width: 767px) {
    grid-column: 1/5;
  }
`;

export const SecondColumnContent = styled.div`
  grid-column: 5/11;

  @media (max-width: 1024px) {
    grid-column: 5/12;
  }

  @media (max-width: 767px) {
    grid-column: 1/5;
  }
`;

export const HeaderWrapper = styled.div`
  height: auto;
  grid-column: 1/13;
  align-self: flex-start;

  @media (max-width: 767px) {
    margin-top: 15px;
    grid-column: 1/5;
  }
`;

type LayoutT = {
  children: React.ReactElement | Array<React.ReactElement>;
  styles?: FlattenSimpleInterpolation;
};
type PageContentT = Omit<LayoutT, 'children'>;

const Layout = ({ children, styles }: LayoutT) => {
  return <PageContent styles={styles}>{children}</PageContent>;
};

export default Layout;
