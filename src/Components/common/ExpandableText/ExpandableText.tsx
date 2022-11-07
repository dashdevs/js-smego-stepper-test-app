import { useState } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  line-height: 20px;
  font-size: 14px;
  color: #7f7f7f;
`;

const TextButton = styled.span`
  line-height: 20px;
  font-size: 14px;
  color: #2b64f5;
  cursor: pointer;
`;

type ExpandableTextT = {
  smallPartText: string;
  fullText: string;
};

const ExpandableText = ({ smallPartText, fullText }: ExpandableTextT) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Text>{smallPartText}</Text>{' '}
      <TextButton
        onClick={(event) => {
          setIsExpanded(!isExpanded);
        }}
      >
        {' '}
        {!isExpanded && 'Please click to expand'}{' '}
      </TextButton>
      {isExpanded && <Text>{fullText}</Text>}
    </>
  );
};

export default ExpandableText;
