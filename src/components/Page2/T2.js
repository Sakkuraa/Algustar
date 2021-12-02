import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import React, { Component } from 'react'

export default class T2 extends Component {
	render(){
		return(
			<div className="main-middle2 main-top clearfix">
				<article>
					<ul><br/>
						<NavLink to="/First2">Аан Иэйэхсит</NavLink><br/><br/>
						<NavLink to="/Second2">Иһэгэй Иэйэхсит</NavLink><br/><br/>
			         <NavLink to="/Third2">Күн Иэйэхсит</NavLink><br/><br/>
			         <NavLink to="/Fourth2">Мичил Иэйэхсит</NavLink><br/><br/>
			         <NavLink to="/Fifth2">Налыгыр Иэйэхсит</NavLink><br/><br/>
			         <NavLink to="/Sixth2">Күөгэл Иэйэхсит</NavLink><br/><br/>
			         <NavLink to="/Seventh2">Эдьэн Иэйэхсит</NavLink><br/><br/>
					</ul>
				</article>
				<div className="ipostasi"><br/>						
						<h2>
							Покровительница (поющая гимны), Покровитель (Иэйэхсит)
						</h2><br/>
						<p> <br/>
                Вторая основная
						ипостась Тангра, помещаемая на втором небе, 7 ипостасей которой в якутской обрядовой
						поэзии представляется в виде женщин<br/><br/>
						И1. Почтенная Покровительница (Аан Иэйэхсит). Способствует связи с природой.<br/>
						И2. Щедрая Покровительница (Иһэгэй Иэйэхсит).<br/>
						И3. Солнечная Покровительница (Күн Иэйэхсит). Покровительница души.<br/>
						И4. Жизнерадостная Покровительница (Мичил Иэйэхсит). Защитница настоящего и
						будущего.<br/>
						И5. Степенная Покровительница (Налыгыр Иэйэхсит). Стимулирует защитные силы
						человека.<br/>
						И6. Величавая Покровительница (Күөгэл Иэйэхсит). Помогает защитить свою ауру.<br/>
						И7. Величественная Покровительница (Эдьэн Иэйэхсит). Помогает сохранению
						здоровья.<br/><br/>
						</p>
				</div>
			</div>
		)
	}
}