import styled from 'styled-components'

export const Header = styled.header`
    background: #007fab;
    background-image: linear-gradient(to right, #0EBCE7, #223A8A);
    padding: 2rem 0 2rem;
    text-align: right;
    z-index: 1;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: -3rem;
  margin-left: 0.8rem;
  color: #fff;
  text-shadow: 1px 1px 0 #0000004d;
`;

export const Subtitle = styled.h1`
    color: #333;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0 1rem;
  color: #333;
  opacity: 0.6;
  margin-top: -5rem;
`;