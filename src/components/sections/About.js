import React, { lazy, Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';
import Loading from '../Loading';


const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

`
const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
  width: 85%;
}

@media (max-width: 64em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
@media (max-width: 40em){
  

  &>*:last-child{
    width: 90%;
  }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`
 
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontlg};

}
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;
@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontsm};

}

`
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
  width: 100%;
  text-align:center;
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 30em){
  font-size: ${(props) => props.theme.fontxs};

}

`
const ButtonContainer = styled.div`
 width: 80%;
 margin: 1rem auto;
 display: flex;
  align-self: flex-start;

  @media (max-width: 64em){
width: 100%;

a{
  margin: 0 auto;
}
}

`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box> 
        <Suspense fallback={<Loading />}>
          <Carousel /> </Suspense> </Box>
        <Box> 
        <Title>
        lets Plant <br /> water and grow.
        </Title>
        <SubText>
        Industry Plants Nft is a private collection of NFTs—unique digital collectibles. The Plants are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
        </SubText>
        <SubTextLight>
        We are here to “Plant”, water, and grow any talented music artist who needs more exposure in the music Industry. Our mission has three parts. The first is to build a vibrant, loyal, supportive crypto community to help enrich, expose and educate any up-and-coming music artist who wants to learn more about the NFT and crypto space. The second is to provide as much value as possible to our Holders and Artists by having multiple reward streams. The third is becoming a self-sustaining Record Label DAO for new and up-and-coming music artists for years to come.
        </SubTextLight>
        <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text="JOIN OUR DISCORD" link="https://discord.gg/yUCWgPxwTB" />
        </ThemeProvider>
        </ButtonContainer>
         </Box>
      </Container>
    </Section>
  )
}

export default About