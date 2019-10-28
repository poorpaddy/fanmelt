import React, { useState } from 'react'
import { ChipElem } from './Styled'


interface IProps {
  onClick: () => void;
  label: string;
  selected: boolean;
}

const Chip = ({ onClick, label, selected }: IProps) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <ChipElem label={label} className={`${selected ? 'selected' : ''}`} onClick={handleClick} />
  );
}

export default Chip
export { Chip }