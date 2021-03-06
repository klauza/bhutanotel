import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../layout/Elements';

// STYLES
const Col = styled.div`
  width: 100%;
  margin-top: 75px;
  border: 1px solid lightgrey; border-radius: 3px;
  opacity: 0;
  transform: scale(0.75) translateY(150px);
  box-shadow: 0px 5px 6px -2px rgba(117,117,117,0.65);
`;

const Card = styled.div`
  width: 100%;
  text-align: center;
  
`;
const CardImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 50%;
  position: absolute;
  top: -50px; left: 50%; transform:translateX(-50%);
`;
const CardBody = styled.div`
  button{
    margin: 10px 0;
  }
`;
const CardTitle = styled.h4`
  margin-top: 50px;
`;
const CardText = styled.p`
  text-align: center;
  margin: 5px 0;
 &:nth-child(2){
   margin-bottom: -10px;
 }
`;


const GuideList = ({guide, id}) => {
  const [guideName, setGuideName] = useState(null);
  const [lackexp] = useState(5 - guide.experience);

  useEffect(() => {
    
    let person = document.querySelector('.person-'+id);
    let delay = id*65;
    person.style.transition = `all 300ms ease ${delay}ms`;
    person.style.opacity = `1`;
    person.style.transform = `translateY(0px) scale(1)`;

    let name = guide.name;
    let replaced = name.replace(/\s/g, '-');
    replaced = replaced.toLowerCase();
    setGuideName(replaced);
    
  //eslint-disable-next-line
  }, [])
  
  const experienceStars =()=> {
    let output = [];
    for(let i=0; i < guide.experience; i++){
      output.push(<i key={i} className="fa fa-star"></i>)
    }
    for(let j=0; j < lackexp; j++){
      output.push(<i key={j+112} className="fa fa-star-o"></i>)
    }
    return output
  }
  
  return (
   

    <Col className={`person-guide person-${id}`}>
        <Card>
          <CardImg src={guide.img} />
          <CardBody>
            <CardTitle>{guide.name}</CardTitle>

            <CardText>
              {experienceStars().map(star => star )}
            </CardText>
            <CardText>
              Experience
            </CardText>
            
            <Link 
            to={{
              pathname: `/hiring/guide/${guideName}`,
              state: {guide}
              }} >
              <Button>Details</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>

   
  )
 
  
} 

export default GuideList
