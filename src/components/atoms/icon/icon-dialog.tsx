import React, {ReactElement} from 'react'

import {
  IconStyled,
  PathStyled,
  RectStyled
} from "./icon.styles";

import {IconProps} from './icon.types'

export const IconDialog = ({ 
   color,
   title,
   size = 30 
  }:IconProps): ReactElement => {

  const viewBox = '0 0 490 490';

  return (
    <IconStyled size={size} title={title}>
      <svg 
        viewBox={viewBox} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathStyled color={color} d="M425,139.393h-75v-55c0-35.841-29.159-65-65-65H65c-35.841,0-65,29.159-65,65v100c0,34.159,26.486,62.248,60,64.81
				v101.404l80-80v33.787c0,35.841,29.159,65,65,65h123.787L430,470.607V369.203c33.514-2.562,60-30.651,60-64.81v-100
				C490,168.552,460.841,139.393,425,139.393z M140,204.393v23.787l-50,50v-58.787H65c-19.299,0-35-15.701-35-35v-100
				c0-19.299,15.701-35,35-35h220c19.299,0,35,15.701,35,35v55H205C169.159,139.393,140,168.552,140,204.393z M460,304.393
				c0,19.299-15.701,35-35,35h-25v58.787l-58.787-58.787H205c-19.299,0-35-15.701-35-35v-100c0-19.299,15.701-35,35-35h220
				c19.299,0,35,15.701,35,35V304.393z"/>
        <RectStyled fillcolor={color} x="215" y="209.393" width="200" height="30"/>
			  <RectStyled fillcolor={color} x="215" y="269.393" width="200" height="30"/>
      </svg>
    </IconStyled>
  )
 };