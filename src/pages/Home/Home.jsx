import React from 'react';

import CardSlider from '../Card/CardSlider';
import {Container} from '../Home/Style'
import ImageSlider from '../ImagaSlider/ImageSlider';
import Movies from '../Movies/Movies';
import Comedy  from '../Movies/Comedy';
import Action from '../Movies/Action';
import Children from '../Movies/Children';
import Horror from '../Movies/Horror';
import Thriller from '../Movies/Thriller';
import Adventure from '../Movies/Adventure';
import Cricket from '../Card/Cricket';
// import Series from '../Seriesimage/Series';

const Home = () => {
return (
	<Container>
	<ImageSlider/>
	 <Movies />
	 <Comedy/>
	 {/* <Series/> */}
	 <Action/>
	 <Children/>
	 <Horror/>
	 <Thriller/>
	<Adventure/>
	<CardSlider/>
	<Cricket/>
	</Container>

);
};

export default Home;
