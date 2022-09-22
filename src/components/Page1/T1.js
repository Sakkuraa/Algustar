import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import React, { Component } from 'react'

export default class T1 extends Component {
	render(){
		return(
			<div className="main-middle2 main-top clearfix">
				<article>
					<ul><br/>
						<NavLink to="/First1" className="main-nav" activeClassName="main-nav-active">Аан Айыыһыт</NavLink><br/><br/>
						<NavLink to="/Second1">Имэҥ Айыыһыт, Дьалыҥ Айыыһыт</NavLink><br/><br/>
			         <NavLink to="/Third1">Хороҥ Айыыһыт, Ньэлбэй Айыыһыт</NavLink><br/><br/>
			         <NavLink to="/Fourth1">Ахтар Айыыһыт</NavLink><br/><br/>
			         <NavLink to="/Fifth1">Хан Айыыһыт</NavLink><br/><br/>
			         <NavLink to="/Sixth1">Күбэй Айыыһыт</NavLink><br/><br/>
			         <NavLink to="/Seventh1">Эдьэн Айыыһыт</NavLink><br/><br/>
					</ul>
				</article>
				<div className="ipostasi"><br/>						
						<h2>
							Творительница, Творитель (Айыыһыт)
						</h2><br/>
						<p> <br/>
                		Первая основная ипостась Аар Тойон, помещаемая на первом фрагменте
            третьего круга (Билии), отвечающая за семейное счастье, <br />7
            ипостасей которой в традиционной поэзии Саха представляется в виде
            женщин.<br/><br/>
							И1. Почтенная Творительница (Аан Айыыһыт). Покровительница семьи и фунции
							деторождения.<br/>
							И2/1. Создательница Страсти (Имэҥ Айыыһыт). Может способствовать любви и
							вызвать интерес к работе.<br/>
							И2/2. Создательница Влечения (Дьалыҥ Айыыһыт).<br/>
							И3/1. Создательница Семьи для Юношей (Хороҥ Айыыһыт).<br/>
							И3/2. Создательница Семьи для Девушек (Ньэлбэй Айыыһыт).<br/>
							И4. Незабываемая Творительница (семьи) (Ахтар Айыыһыт).<br/>
							И5. Дарительница (родительского) Удовлетворения (Хан Айыыһыт).<br/>
							И6. Дарительница (родительского) Счастья и Достоинства (Күбэй Айыыһыт).<br/>
							И7. Величественная Создательница (Эдьэн Айыыһыт). Помогает реализации планов.<br/><br/>
						</p>
				</div>
			</div>
		)
	}
}
