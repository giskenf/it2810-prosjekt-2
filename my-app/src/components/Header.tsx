import React from 'react';
import './Header.css'

export const Header: React.FC = () => {
    return (
       <>
           <div className = "Background" >
                <div className = "NavArea"></div>
           </div>
       </>
);
};

/*const Background = styled.div<{ active: boolean }>`
    margin: 0;
    background-color: var(--sec-purple-color);
    padding 0 50px;
    color: white;
`;

const NavArea = div<{ active: boolean }>`
  margin: 0;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav<{ active: boolean }>`
  width: 40%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
`;

const NavButton = styled.a<{ active: boolean }>`
  font: Roboto, sans-serif;
  font-size: var(--font-tiny);
`;

const Logo = styled.a<{ active: boolean }>`
  width: 60%;
  font: Roboto, sans-serif;
`;

const HRule = styled.hr<{ active: boolean }>`
  background-color: white;
  height: 0.8px;
  border: none;
`;

const HeaderInfo = styled.div<{ active: boolean }>`
  margin: 0;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  jusify-content: space-between;
`;

const Headline = styled.h1<{ active: boolean }>`
  width: 60%;
  font-size: var(--font-huge);
  font-weight: 900;
`;

const HeaderText = styled.p<{ active: boolean }>`
  width: 40%;
`;*/
