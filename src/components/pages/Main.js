import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import MainCarrousel from './Main-children/MainCarousel';
import MainCards from './Main-children/MainCards';
import styled from 'styled-components';
import { Wrapper } from '../layout/Elements';
import { logo1, logo2, logo3, logo4, carImg } from '../../media/index';

const Sponsors = styled.div`
  width: 100%;
  height: auto;
  /* background: #f2f5f7; */
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  background: rgba(255,255,255,0.35);
  p{
    text-align: center;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;
const SponsorsLogos = styled.div`
  height: 70px;
  margin: 0 auto;
  width: 180px;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  @keyframes moveSlideshow {
    100% { 
      transform: translateX(-66.6666%);  
    }
  }

  img{
    width: 60px; 
    height: 60px; 
    object-fit: cover; 
    margin: 0 10px;
  }
  & > div {
    height: 70px;
    width: 480px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translate3d(0, 0, 0);
  }
  .mover {
    animation: moveSlideshow 4s linear infinite;
  }
`;

const Description = styled.div`
  border-top: 1px solid lightgrey; border-bottom: 1px solid lightgrey;
  margin: 100px 0 150px;
  text-align: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: rgba(255,255,255,0.35);
  display: block;
  h1{
    letter-spacing: 3px;
    font-weight: 900;
  }
  p{
    font-size: 1.1rem;
  }
  p:nth-child(2){
    margin: 20px 0;
  }
`;
const CarDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px auto -50px;
`;
const CarDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CarImage = styled.div`
  flex: 1;
  img{
    width: 100%; height: 100%; object-fit: cover;
  }
`;
const CarTopDesc = styled.h3`
  text-align: center;
`;
const CarTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  &:after{
    content:'';
    background: rgb(0, 0, 0);
    width: 50%;
    height: 3px;
    border: 0; border-radius: 35px;
    margin: 20px auto 20px;
    display: block;
  }
`;
const CarButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 10px;
  background: green;
  color: white;
  &:hover{
    cursor: pointer;
  }
`;


const Main = () => {
  return (
    <Fragment>
      <MainCarrousel/>

      <Sponsors>
        <p>Collaborators</p>
        <SponsorsLogos>
          <div className="mover">
            <img src={logo1} alt=""/>
            <img src={logo2} alt=""/>
            <img src={logo3} alt=""/>
            <img src={logo4} alt=""/>
            <img src={logo1} alt=""/>
            <img src={logo2} alt=""/>
          </div>
        </SponsorsLogos>
      </Sponsors>
      
      <Description>
          <h1>By travellers for travellers</h1>

          <p> <strong>Once we were travellers too, just like you. Discovering new horizons, <br/>
          broadening knowledge, meeting new interesting people.</strong></p>

          <p> Now, we help you achieve even something bigger <br/>
          We help you with finding answers and provide a needed comfort.</p>
      </Description>

      <Wrapper>
        <MainCards />
      
        <CarDiv>
            <CarDesc>
              <CarTopDesc>Would you like to speed up your exploration?</CarTopDesc>
              <CarTitle>Rent a car!</CarTitle>
              <Link to='/hiring'> <CarButton>Check deals</CarButton> </Link>
            </CarDesc>

            <CarImage>
              <img src={carImg} alt=""/>
            </CarImage>
        </CarDiv>

      </Wrapper>
    </Fragment>
  )
}

export default Main
