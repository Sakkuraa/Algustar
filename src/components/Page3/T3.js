import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import React, { Component } from 'react'

export default class T3 extends Component {
	render(){
		return(
			<div className="main-middle2 main-top clearfix">
				<article>
					<ul><br/>
						<NavLink to="/First3">Аан Дьөһөгөй</NavLink><br/><br/>
						<NavLink to="/Second3">Күүс Дьөһөгөй</NavLink><br/><br/>
			         <NavLink to="/Third3">Тулуур Дьөһөгөй</NavLink><br/><br/>
			         <NavLink to="/Fourth3">Албас Дьөһөгөй</NavLink><br/><br/>
			         <NavLink to="/Fifth3">Сатабыл Дьөһөгөй</NavLink><br/><br/>
			         <NavLink to="/Sixth3">Күн Дьөһөгөй</NavLink><br/><br/>
			         <NavLink to="/Seventh3">Күрүө Дьөһөгөй</NavLink><br/><br/>
					</ul>
				</article>
				<div className="ipostasi"><br/>						
						<h2>
							Даритель (Дьөһөгөй)
						</h2><br/>
						<p> <br/>
                	Третья основная ипостась Тангра, помещаемая на третьем
						небе. Может помочь различным видам деятельности.<br/><br/>
						И1. Почтенный Даритель (Аан Дьөһөгөй). Может усилить работоспособность.<br/>
						И2. Могучий Даритель (Күүс Дьөһөгөй). Может укрепить силы.<br/>
						И3. Солнечная Покровительница (Күн Иэйэхсит). Покровительница души.<br/>
						И4. Даритель Мастерства (Албас Дьөһөгөй).<br/>
						И5. Умелый Даритель (Сатабыл Дьөһөгөй).<br/>
						И6. Солнечный Даритель (Күн Дьөһөгөй). Способствует производительности.<br/>
						И7. Дарующий Покровитель (Күрүө Дьөһөгөй). Может помочь в карьере.<br/><br/>
						</p>
				</div>
			</div>
		)
	}
}
