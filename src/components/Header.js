import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: #090b13;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  overflow-x: hidden;
  height: 100%;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;
      margin-left: 5px;

      &:after {
        position: absolute;
        content: '';
        opacity: 0;
        visibility: hidden;
        height: 2px;
        background: white;
        left: 0;
        right: 0;
        bottom: -12px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width: auto;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
