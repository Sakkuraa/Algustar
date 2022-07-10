import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

export default class T5 extends Component {
  render() {
    return (
      <div className="main-middle2 main-top clearfix">
        <article>
          <ul>
            <br />
            <NavLink to="/First5">Аан Суорун</NavLink>
            <br />
            <br />
            <NavLink to="/Second5">Төрүт Суорун</NavLink>
            <br />
            <br />
            <NavLink to="/Third5">Түстүр Суорун</NavLink>
            <br />
            <br />
            <NavLink to="/Fourth5">Куулаттарар Суорун</NavLink>
            <br />
            <br />
            <NavLink to="/Fifth5">Үөрэх Суорун</NavLink>
            <br />
            <br />
            <NavLink to="/Sixth5">Уһуйар Суорун</NavLink>
            <br />
            <br />
            <NavLink to="/Seventh5">Идэ Суорун</NavLink>
            <br />
            <br />
          </ul>
        </article>
        <div className="ipostasi">
          <br />
          <h2>Великий Небесный Царь-ворон (Улуу Суорун)</h2>
          <br />
          <p>
            {" "}
            <br />
            Покровитель профессий. Пятая основная ипостась Аар Тойон, помещаемая
            на пятом фрагменте третьего круга (Билии).
            <br />
            <br />
            И1. Почтенный Небесный Царь (Аан Суорун). Дает способность к
            освоению профессии.
            <br />
            И2. Главный Небесный Царь (Төрүт Суорун). Сохраняет преемственность
            поколений.
            <br />
            И3. Небесный Царь Предназначения (Түстүр Суорун).
            <br />
            И4. Энергичный Небесный Царь (Куулаттарар Суорун). Концентрирует
            силы и сознание человека для приобщения к профессии.
            <br />
            И5. Небесный Царь Учебы (Үөрэх Суорун).
            <br />
            И6. Указывающий (дорогу) Небесный Царь (Уһуйар Суорун).
            <br />
            И7. Небесный Царь Профессий (Идэ Суорун).
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
