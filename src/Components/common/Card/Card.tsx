import styled from 'styled-components';
import React from 'react';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #ffffff;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

type LayoutT = {
  children: React.ReactElement | Array<React.ReactElement>;
};

const Card = ({ children }: LayoutT) => {
  return (
    <StyledCard className="content">
      <>{children}</>
    </StyledCard>
  );
};

export default Card;
