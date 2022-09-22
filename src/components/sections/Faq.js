import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHERE CAN I VIEW MY NFTS?" >
  Once minted or bought simply connect to your OpenSea account to view your NFTs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE METAVERSE?" >
  A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO WE NEED ROYALTIES?" >
  The amount of royalties was fixed at 10% to finance the Industry Plants's projects and to make sure we have enough water to grow our Future Music Artist. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of Music industy experts and investors with the same mindset and common interests.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="HOW CAN I USE MY NFT?" >
You will be able to use your NFT as an avatar in the Metaverse and you will be able to stake it in our future marketplace to earn rewards. Holding also means that you are part of an exclusive network of investors and Music Industry experts. You will also be granted one vote in Record Label DAO 
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT ARE INDUSTRY PLANTS NFTS?
" >
An Industry Plant is a music artist who has a Major/Indie Label backing their movement. IndustryPlantsNFT are just that! If you are a fan of new music and supporting underground talent this project is for you! We are here to “Plant”, water and grow any talented music artist who needs more exposure in the music Industry. The first collection will have 5,000 unique, randomly generated vibrant funny cartoons depicting Industry Plants
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE RECORD LABEL DAO?
" >
Well lets start off by saying what DAO stands for "decentralized autonomous organization" (DAO) is an entity with no central leadership. Decisions get made from the bottom-up, governed by a community organized around a specific set of rules enforced on a blockchain. Our Community of Holders will be the ones looking for new seeds (Music Artist) to plant. As a Holder you can suggest new artist to be added to Industry Plants Record Label. All suggested artist will be voted on to the Record Label by a community vote. As a Holder you get one Vote. 
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq