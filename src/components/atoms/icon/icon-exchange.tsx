import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconExchange = ({ 
   color,
   title,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '0 0 330 330';

  return (
    <IconStyled size={size}  title={title}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M315,75H51.213l49.393-49.394c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-75,75
	c-5.858,5.857-5.858,15.355,0,21.213l75,75C82.322,178.535,86.161,180,90,180c3.839,0,7.678-1.465,10.606-4.394
	c5.858-5.857,5.858-15.355,0-21.213L51.213,105H315c8.284,0,15-6.716,15-15S323.284,75,315,75z"/>
        <PathStyled color={color} d="M250.606,154.393c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213L278.787,225H15
	c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h263.787l-49.393,49.394c-5.858,5.857-5.858,15.355,0,21.213
	C232.322,328.535,236.161,330,240,330c3.839,0,7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213L250.606,154.393z"/>
      </svg>
    </IconStyled>
  )
 };