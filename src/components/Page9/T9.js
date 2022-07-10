import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

export default class T9 extends Component {
  render() {
    return (
      <div className="main-middle2 main-top clearfix">
        <article>
          <ul>
            <br />
            <NavLink to="/First9">Аан Айыы Тойон</NavLink>
            <br />
            <br />
            <NavLink to="/Second9">Көх Айыы Тойон</NavLink>
            <br />
            <br />
            <NavLink to="/Third9">Алгыс Айыы Тойон</NavLink>
            <br />
            <br />
            <NavLink to="/Fourth9">Туом Айыы Тойон</NavLink>
            <br />
            <br />
            <NavLink to="/Fifth9">Майгы Айыы Тойон</NavLink>
            <br />
            <br />
            <NavLink to="/Sixth9">Сиэр Айыы Тойон</NavLink>
            <br />
            <br />
            <NavLink to="/Seventh9">Дуом Айыы Тойон</NavLink>
            <br />
            <br />
          </ul>
        </article>
        <div className="ipostasi">
          <br />
          <h2>
            Светлый Бог-господин Главный из Айыы (Үрүҥ Аар Тойон), помещаемый в
            центре Билии.
          </h2>
          <br />
          <p>
            {" "}
            <br />
            И1. Почтенный Бог-господин (Аан Айыы Тойон). Дает способность к
            творчеству и веру в свои силы.
            <br />
            И2. Вдохновляющий Владыка (Көх Айыы Тойон).
            <br />
            И3. Благословляющий Владыка (Алгыс Айыы Тойон).
            <br />
            И4. Владыка Обрядов (Туом Айыы Тойон).
            <br />
            И5. Владыка Характера (Майгы Айыы Тойон).
            <br />
            И6. Владыка Нравов (Сиэр Айыы Тойон).
            <br />
            И7. Владыка Заповедей (Дуом Айыы Тойон).
            <br />
          </p>
        </div>
      </div>
    );
  }
}
