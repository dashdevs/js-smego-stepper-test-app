import React from 'react';

import StyledCard from './Card.style';

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
