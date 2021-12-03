import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";


function Header() {
	return (
		<header>
	    <div className="main-top">
	      <div className="header-t clearfix">
	          <NavLink to="/"><img src={require("./Tangra.png")}/></NavLink>
	      </div>
	      <div className="header-b clearfix">
	        <nav>
	          <ul className="menu">	         
	            <li><NavLink to="/">Айыы</NavLink></li>	         
	            <li><NavLink to="/t1">Айыыһыт</NavLink></li>
	            <li><NavLink to="/t2">Иэйэхсит</NavLink></li>
	            <li><NavLink to="/t3">Дьөһөгөй</NavLink></li>
	            <li><NavLink to="/t4">Хотой Айыы</NavLink></li>
	            <li><NavLink to="/t5">Улуу Суорун</NavLink></li>
	            <li><NavLink to="/t6">Сүҥ Дьааһын</NavLink></li>
	            <li><NavLink to="/t7">Билии айыылара</NavLink></li>
	            <li><NavLink to="/t8">Турук айыылара</NavLink></li>
	            <li><NavLink to="/t9">Аан Айыы Тойон</NavLink></li>	         
	          </ul>
	        </nav>	              
	      </div>
	    </div>
	  </header>	  
	)
}
export default Header;
//https://github.com/Sakkuraa/Algustar.git
