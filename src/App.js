import React from 'react';
import './App.css';
import Navbar from './componets/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Musics from './pages/Musics';
import Videos from './pages/Videos';
import Sports from './pages/Sports';
// import News from './pages/NewsPaga/News'


function App() {
return (
<>
<Navbar className="navbar" />
<div className='appPage'>
	
	<Routes>
	 <Route path='/' element={<Home/>} /> 
	 <Route path='/musics' element={<Musics/>} /> 
	 <Route path='/videos'  element={<Videos/>} /> 
	 <Route path='/sports' element={<Sports/>} /> 
	 {/* <Route path='/news' element={<News/>} />  */}
	</Routes>
	</div>
	</>
);
}

export default App;

