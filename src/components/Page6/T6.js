import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

export default class T6 extends Component {
  render() {
    return (
      <div className="main-middle2 main-top clearfix">
        <article>
          <ul>
            <br />
            <NavLink to="/First6">Аан Хаан</NavLink>
            <br />
            <br />
            <NavLink to="/Second6">Ситим Хаан</NavLink>
            <br />
            <br />
            <NavLink to="/Third6">Тыын Хаан</NavLink>
            <br />
            <br />
            <NavLink to="/Fourth6">Киэҥ Хаан</NavLink>
            <br />
            <br />
            <NavLink to="/Fifth6">Сырдык Хаан</NavLink>
            <br />
            <br />
            <NavLink to="/Sixth6">Ыраас Хаан</NavLink>
            <br />
            <br />
            <NavLink to="/Seventh6">Күөгэл Хаан</NavLink>
            <br />
            <br />
          </ul>
        </article>
        <div className="ipostasi">
          <br />
          <h2>Правдивый и Могучий Владыка (Сүҥ Дьааһын)</h2>
          <br />
          <p>
            {" "}
            <br />
            Совершенствование человеческих качеств. Шестая основная ипостась Аар
            Тойон, помещаемая в шестом фрагменте третьего круга (Билии). <br />
            <br />
            И1. Почтенный Владыка (Аан Хаан). Прививает желание поиска истины.
            <br />
            И2. Связующий Владыка (Ситим Хаан). Связует человека с природой и
            Тангра.
            <br />
            И3. Владыка Дыхания (Тыын Хаан). Может помочь продлению жизни.
            <br />
            И4. Широкий Владыка (Киэҥ Хаан). Освобождает от комплексов, помогает
            в общении с людьми.
            <br />
            И5. Светлый Владыка (Сырдык Хаан). Позволяет восприятию мира во всём
            его великолепии.
            <br />
            И6. Чистый Владыка (Ыраас Хаан). Очищает ауру человека.
            <br />
            И7. Величественный Владыка (Күөгэл Хаан). Молитва о правде, светлом
            и ясном мышлении.
            <br />
          </p>
        </div>
      </div>
    );
  }
}
