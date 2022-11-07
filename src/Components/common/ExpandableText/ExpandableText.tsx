import { useState } from 'react';
import { TextButton, Text } from './ExpandableText.style';

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
        onClick={() => {
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
