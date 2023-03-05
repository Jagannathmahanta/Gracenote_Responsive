import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: linear-gradient(to bottom, #141b29, #0c111b 300px);
height: 70px;
display: flex;
font-family: "Roboto","HelveticaNeue-Light",sans-serif;
justify-content: space-between;
// padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
// justify-content: flex-start; 
overflow-x:hidden;

`;


export const NavLink = styled(Link)`
color: rgb(255,255,255,0.8);
display: flex;
align-items: center;
font-size: 16px;
font-weight: 400;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
margin-left:20px;
&:hover{
	color: #fff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: left;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
export const NavbarBrand = styled.div`
line-height: 70px;
color:white;
font-weight:400;
font-family: "Roboto","HelveticaNeue-Light",sans-serif;
cursor: pointer;
`;