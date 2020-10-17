import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import React, { Component } from 'react'

export default class T7 extends Component {
	render(){
		return(
			<div className="main-middle2 main-top clearfix">
				<article>
					<ul><br/>
						<NavLink to="/First7">Аан Билгэ</NavLink><br/><br/>
						<NavLink to="/Second7">Бэлиэһит Билгэ</NavLink><br/><br/>
			         <NavLink to="/Third7">Билгэһит Билгэ</NavLink><br/><br/>
			         <NavLink to="/Fourth7">Бит Танха</NavLink><br/><br/>
			         <NavLink to="/Fifth7">Тойонньут Таҥха</NavLink><br/><br/>
			         <NavLink to="/Sixth7">Көрбүөччү Дьылҕа</NavLink><br/><br/>
			         <NavLink to="/Seventh7">Сэһэн Дьылҕа</NavLink><br/><br/>   
					</ul>
				</article>
				<div className="ipostasi"><br/>						
						<h2>
							Владыки Знания (Билии айыылара) образуют седьмую основную ипостась Тангра,<br/>
							помещаемую на седьмом небе.</h2><br/>
                     Великий Владыка Знания (Билгэ Хаан). Первый из трех Владык знания.<br/>
                     Великий Владыка Предвидения (Таҥха Хаан). Второй Владыка знания.<br/>
                     Великий Владыка Судьбы (Дьылҕа Хаан). Третий Владыка знания.<br/>
						<br/>
						<p> <br/>               	
					     И1. Почтенный Владыка Знания (Аан Билгэ). Передаёт человеку дар к познанию.<br/>
					     И2. Владыка Знаков (Бэлиэһит Билгэ).<br/>
					     И3. Владыка Признаков (Билгэһит Билгэ).<br/>
					     И4. Владыка Предвидения (Бит Танха).<br/>
					     И5. Владыка Толкования (Тойонньут Таҥха).<br/>
					     И6. Владыка Пророчества (Көрбүөччү Дьылҕа).<br/>
					     И7. Владыка Рассуждений (Сэһэн Дьылҕа).<br/>  
						</p>
				</div>
			</div>
		)
	}
}
