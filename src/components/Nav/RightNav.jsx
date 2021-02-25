import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navLink = [
  {
    id: 1,
    link: '/',
    title: 'HOME',
  },
  {
    id: 2,
    link: '/about-us',
    title: 'ABOUT US',
  },
  {
    id: 3,
    link: '/service-menu',
    title: 'SERVICE MENU',
  },
  {
    id: 4,
    link: '/gallery',
    title: 'GALLERY',
  },
  {
    id: 5,
    link: '/contact-us',
    title: 'CONTACT US',
  },
  {
    id: 6,
    link: '/book-online',
    title: 'BOOK ONLINE 24/7',
  },
];

const RightNav = ({ open, setOpen }) => {
  const [links, setLinks] = useState(navLink);
  const [value, setValue] = useState(0);

  return (
    <>
      <Ul open={open} onClick={() => setOpen(!open)}>
        {links.map((link) => {
          return (
            <li key={link.id} className={`${link.id === value && 'active-btn'}`} onClick={() => setValue(link.id)}>
              <Link to={link.link}>{link.title}</Link>
            </li>
          );
        })}
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 40;

  li {
    padding: 18px 10px;
    text-align: justify;
    color: #fff;
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 70%;
    padding-top: 6rem;
    margin-bottom: 0.1rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;

    li {
      border-bottom: 1px solid;
      width: 50%;
      text-align: center;
    }
  }
`;

export default RightNav;
