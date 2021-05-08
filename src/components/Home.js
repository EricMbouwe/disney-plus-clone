import React, { useEffect } from 'react';
import db from '../firebase';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Recommend from './Recommend';
import Viewers from './Viewers';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import Trending from './Trending';
import Originals from './Originals';
import NewDisney from './NewDisney';
import { selectUserName } from '../features/user/userSlice';

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case 'new':
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:

        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        }),
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
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
