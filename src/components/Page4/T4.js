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
            <NavLink to="/First4">Аан Тайбыыр</NavLink>
            <br />
            <br />
            <NavLink to="/Second4">Түрбүү Кынат</NavLink>
            <br />
            <br />
            <NavLink to="/Third4">Ала Мондоҕой</NavLink>
            <br />
            <br />
            <NavLink to="/Fourth4">Алтан Сабарай</NavLink>
            <br />
            <br />
            <NavLink to="/Fifth4">Күн Эрили</NavLink>
            <br />
            <br />
            <NavLink to="/Sixth4">Дьаҕыл Түөс</NavLink>
            <br />
            <br />
            <NavLink to="/Seventh4">Хомпоруун Хотой</NavLink>
            <br />
            <br />
          </ul>
        </article>
        <div className="ipostasi">
          <br />
          <h2>Небесный Царь-орел (Хотой Айыы)</h2>
          <br />
          <p>
            {" "}
            <br />
            Четвертая основная ипостась Аар Тойон, помещаемая на четвертом
            фрагменте третьего круга (Билии).
            <br />
            <br />
            И1. Почтенный Царь-орел (Аан Тайбыыр). Может способствовать
            сплочению людей.
            <br />
            И2. Неустанный Царь-орел (Түрбүү Кынат). Может помочь раскрытию
            способностей.
            <br />
            И3. Могучий Царь-орел (Ала Мондоҕой). Способствует
            целеустремленности.
            <br />
            И4. Господствующий Царь-орел (Алтан Сабарай). Может помочь раскрытию
            своего потенциала.
            <br />
            И5. Солнечный Царь-орел (Күн Эрили). Может способствовать
            объединению людей.
            <br />
            И6. Гордый Царь-орел (Дьаҕыл Түөс). Способствует организованности.
            <br />
            И7. Величественный Царь-орел (Хомпоруун Хотой). Способствует участию
            в больших проектах или государственных делах.
            <br />
          </p>
        </div>
      </div>
    );
  }
}
