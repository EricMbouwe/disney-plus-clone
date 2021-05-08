import React from 'react';
import styled from 'styled-components';
import Viewer from './Viewer';

function Viewers() {
  return (
    <Container>
      <Viewer
        imgSource={'/images/viewers-disney.png'}
        videoSource={'/videos/1564674844-disney.mp4'}
      />
      <Viewer
        imgSource={'/images/viewers-pixar.png'}
        videoSource={'/videos/1564676714-pixar.mp4'}
      />
      <Viewer
        imgSource={'/images/viewers-marvel.png'}
        videoSource={'/videos/1564676115-marvel.mp4'}
      />
      <Viewer
        imgSource={'/images/viewers-starwars.png'}
        videoSource={'/videos/1608229455-star-wars.mp4'}
      />
      <Viewer
        imgSource={'/images/viewers-national.png'}
        videoSource={'/videos/1564676296-national-geographic.mp4'}
      />
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  gap: 25px;
  margin-top: 30px;
  padding: 30px 0px 26px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
