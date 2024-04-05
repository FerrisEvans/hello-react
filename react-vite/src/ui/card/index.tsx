import React from 'react';

import './index.css'

interface CardProps {
  className?: string
  children?: React.ReactNode
  key?: number
}

const Card = (props: CardProps) => {
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;