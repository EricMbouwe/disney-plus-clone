import React, { useEffect } from 'react';
import db from '../firebase';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let theMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      dispatch(setMovies(theMovies));
    });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  display: block;
  min-height: calc(100vh - 70px);
  margin-top: 70px;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
