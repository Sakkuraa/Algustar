import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Footer from "./components/Footer";

import Home from './components/Pages/Home';


import T1 from './components/Page1/T1';
import First1 from './components/Page1/First1';
import Second1 from './components/Page1/Second1';
import Fourth1 from './components/Page1/Fourth1';
import Fifth1 from './components/Page1/Fifth1';
import Third1 from './components/Page1/Third1';
import Sixth1 from './components/Page1/Sixth1';
import Seventh1 from './components/Page1/Seventh1';

import T2 from './components/Page2/T2';
import First2 from './components/Page2/First2';
import Second2 from './components/Page2/Second2';
import Fourth2 from './components/Page2/Fourth2';
import Fifth2 from './components/Page2/Fifth2';
import Third2 from './components/Page2/Third2';
import Sixth2 from './components/Page2/Sixth2';
import Seventh2 from './components/Page2/Seventh2';

import T3 from './components/Page3/T3';
import First3 from './components/Page3/First3';
import Second3 from './components/Page3/Second3';
import Fourth3 from './components/Page3/Fourth3';
import Fifth3 from './components/Page3/Fifth3';
import Third3 from './components/Page3/Third3';
import Sixth3 from './components/Page3/Sixth3';
import Seventh3 from './components/Page3/Seventh3';

import T4 from './components/Page4/T4';
import First4 from './components/Page4/First4';
import Second4 from './components/Page4/Second4';
import Fourth4 from './components/Page4/Fourth4';
import Fifth4 from './components/Page4/Fifth4';
import Third4 from './components/Page4/Third4';
import Sixth4 from './components/Page4/Sixth4';
import Seventh4 from './components/Page4/Seventh4';

import T5 from './components/Page5/T5';
import First5 from './components/Page5/First5';
import Second5 from './components/Page5/Second5';
import Fourth5 from './components/Page5/Fourth5';
import Fifth5 from './components/Page5/Fifth5';
import Third5 from './components/Page5/Third5';
import Sixth5 from './components/Page5/Sixth5';
import Seventh5 from './components/Page5/Seventh5';

import T6 from './components/Page6/T6';
import First6 from './components/Page6/First6';
import Second6 from './components/Page6/Second6';
import Fourth6 from './components/Page6/Fourth6';
import Fifth6 from './components/Page6/Fifth6';
import Third6 from './components/Page6/Third6';
import Sixth6 from './components/Page6/Sixth6';
import Seventh6 from './components/Page6/Seventh6';

import T7 from './components/Page7/T7';
import First7 from './components/Page7/First7';
import Second7 from './components/Page7/Second7';
import Fourth7 from './components/Page7/Fourth7';
import Fifth7 from './components/Page7/Fifth7';
import Third7 from './components/Page7/Third7';
import Sixth7 from './components/Page7/Sixth7';
import Seventh7 from './components/Page7/Seventh7';

import T8 from './components/Page8/T8';
import First8 from './components/Page8/First8';
import Second8 from './components/Page8/Second8';
import Fourth8 from './components/Page8/Fourth8';
import Fifth8 from './components/Page8/Fifth8';
import Third8 from './components/Page8/Third8';
import Sixth8 from './components/Page8/Sixth8';
import Seventh8 from './components/Page8/Seventh8';

import T9 from './components/Page9/T9';
import First9 from './components/Page9/First9';
import Second9 from './components/Page9/Second9';
import Fourth9 from './components/Page9/Fourth9';
import Fifth9 from './components/Page9/Fifth9';
import Third9 from './components/Page9/Third9';
import Sixth9 from './components/Page9/Sixth9';
import Seventh9 from './components/Page9/Seventh9';

import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import './index.css';


function App() {
		return (
			<BrowserRouter>
				<Header />

				<div>
			  		<Route exact path="/" component={Home} />
			  	

			  		<Route exact path="/t1" component={T1} />
			  		<Route exact path='/First1' component={First1}/>
			  		<Route path='/Second1' component={Second1}/>
		      	<Route path='/Third1' component={Third1}/>
		      	<Route path='/Fourth1' component={Fourth1}/>
		      	<Route path='/Fifth1' component={Fifth1}/>
		      	<Route path='/Sixth1' component={Sixth1}/>
		      	<Route path='/Seventh1' component={Seventh1}/>

		      	<Route exact path="/t2" component={T2} />
			  		<Route exact path='/First2' component={First2}/>
			  		<Route path='/Second2' component={Second2}/>
		      	<Route path='/Third2' component={Third2}/>
		      	<Route path='/Fourth2' component={Fourth2}/>
		      	<Route path='/Fifth2' component={Fifth2}/>
		      	<Route path='/Sixth2' component={Sixth2}/>
		      	<Route path='/Seventh2' component={Seventh2}/>

		      	<Route exact path="/t3" component={T3} />
			  		<Route exact path='/First3' component={First3}/>
			  		<Route path='/Second3' component={Second3}/>
		      	<Route path='/Third3' component={Third3}/>
		      	<Route path='/Fourth3' component={Fourth3}/>
		      	<Route path='/Fifth3' component={Fifth3}/>
		      	<Route path='/Sixth3' component={Sixth3}/>
		      	<Route path='/Seventh3' component={Seventh3}/>

		      	<Route exact path="/t4" component={T4} />
					<Route exact path='/First4' component={First4}/>
					<Route path='/Second4' component={Second4}/>
					<Route path='/Third4' component={Third4}/>
					<Route path='/Fourth4' component={Fourth4}/>
					<Route path='/Fifth4' component={Fifth4}/>
					<Route path='/Sixth4' component={Sixth4}/>
					<Route path='/Seventh4' component={Seventh4}/>

					<Route exact path="/t5" component={T5} />
					<Route exact path='/First5' component={First5}/>
					<Route path='/Second5' component={Second5}/>
					<Route path='/Third5' component={Third5}/>
					<Route path='/Fourth5' component={Fourth5}/>
					<Route path='/Fifth5' component={Fifth5}/>
					<Route path='/Sixth5' component={Sixth5}/>
					<Route path='/Seventh5' component={Seventh5}/>

					<Route exact path="/t6" component={T6} />
					<Route exact path='/First6' component={First6}/>
					<Route path='/Second6' component={Second6}/>
					<Route path='/Third6' component={Third6}/>
					<Route path='/Fourth6' component={Fourth6}/>
					<Route path='/Fifth6' component={Fifth6}/>
					<Route path='/Sixth6' component={Sixth6}/>
					<Route path='/Seventh6' component={Seventh6}/>

					<Route exact path="/t7" component={T7} />
					<Route exact path='/First7' component={First7}/>
					<Route path='/Second7' component={Second7}/>
					<Route path='/Third7' component={Third7}/>
					<Route path='/Fourth7' component={Fourth7}/>
					<Route path='/Fifth7' component={Fifth7}/>
					<Route path='/Sixth7' component={Sixth7}/>
					<Route path='/Seventh7' component={Seventh7}/>

					<Route exact path="/t8" component={T8} />
					<Route exact path='/First8' component={First8}/>
					<Route path='/Second8' component={Second8}/>
					<Route path='/Third8' component={Third8}/>
					<Route path='/Fourth8' component={Fourth8}/>
					<Route path='/Fifth8' component={Fifth8}/>
					<Route path='/Sixth8' component={Sixth8}/>
					<Route path='/Seventh8' component={Seventh8}/>
					
					<Route exact path="/t9" component={T9} />
					<Route exact path='/First9' component={First9}/>
					<Route path='/Second9' component={Second9}/>
					<Route path='/Third9' component={Third9}/>
					<Route path='/Fourth9' component={Fourth9}/>
					<Route path='/Fifth9' component={Fifth9}/>
					<Route path='/Sixth9' component={Sixth9}/>
					<Route path='/Seventh9' component={Seventh9}/>

			  	</div>
			  	<Footer />
	  	</BrowserRouter>
  )
}

export default App;
