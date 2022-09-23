import React from 'react'
import Popup from 'reactjs-popup';
import styled from 'styled-components'

const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;

font-size: ${props => props.theme.fontmd};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 48em) {
font-size: ${props => props.theme.fontsm};

}
`

const CloseButton = styled.button`
position: absolute;
top: -10px;
right: -10px;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;
width: 30px;
height: 30px;
border-radius: 50%;
`

const Iframe = styled.iframe`
width: 600px;
height: 600px;

@media (max-width: 64em) {
  /* 1024 px */
  width: 90vw;
  height: 90vh;
  }
`

export default ({text}) => (
  <Popup
  trigger={<Btn className="button">{text}</Btn>}
  modal
  nested
  >
    <CloseButton>X</CloseButton>
    <Iframe
    src="https://gateway.ipfscdn.io/ipfs/QmRJ1qPfNF3aaVymeTFQfKs55R3gZ5GeXNc9HzB9x6VGXN/signature-drop.html?contract=0xB2955E3f47d8208b3c345236748387c3411304BD&chainId=43113&primaryColor=purple"
    frameBorder="0"
    />
  </Popup>
);
