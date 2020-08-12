import React from 'react';

import styled from '@emotion/styled';

const HoverDiv = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(29, 29, 31);
    color: white;
    transition: 0.5s;
    width: 125%;
    font-size: 1.2rem;
  }
`;

export default function CategoryItem({ category, onClick, isSelected }) {
  const { id, name } = category;

  return (
    <HoverDiv
      onClick={() => onClick(id)}
    >
      {name + (isSelected ? '(O)' : '')}
    </HoverDiv>
  );
}
