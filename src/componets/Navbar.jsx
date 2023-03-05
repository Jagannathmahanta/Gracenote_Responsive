import React, { useEffect, useState } from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavbarBrand,

} from './NavbarElements.jsx';
import img from '../assets/logo.png'
import '../index.css'
import Musics from '../pages/Musics.jsx';

const Navbar = () => {
	const [sticky,setSticky]=useState(false);
useEffect(()=>{
	const handaleScroll =()=>{
		setSticky(window.scrollY >= 0)
	}
	window.addEventListener('scroll',handaleScroll)
	return ()=>window.removeEventListener('scroll',handaleScroll)
})
return (
	<>
	<Nav className={`${sticky ? "sticky" :""}`}>
		 <Bars />
		
		<NavMenu>
		<NavLink   to='/logituit' activeStyle>
             <img className=" Logo" src={img} alt="" />
		</NavLink>
        <NavbarBrand activeStyle>
             Grecenote POC
		</NavbarBrand>
	
		{/* <NavLink to='/musics' activeStyle>
			Musics
		</NavLink>
		<NavLink to='/videos' activeStyle>
			Videos
		</NavLink>
		<NavLink to='/sports' activeStyle>
			Sports
		</NavLink> */}
		
		
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
