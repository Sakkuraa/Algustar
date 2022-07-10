import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";

export default class T8 extends Component {
  render() {
    return (
      <div className="main-middle2 main-top clearfix">
        <article>
          <ul>
            <br />
            <NavLink to="/First8">Аан Хаан, Аан Турук Айыы</NavLink>
            <br />
            <br />
            <NavLink to="/Second8">Ортоку Хаан, Ортоку Айыы</NavLink>
            <br />
            <br />
            <NavLink to="/Third8">Туруу Хаан, Туруу Айыы</NavLink>
            <br />
            <br />
            <NavLink to="/Fourth8">Бөҕө Хаан, Бөҕө Айыы</NavLink>
            <br />
            <br />
            <NavLink to="/Fifth8">Бигэ Хаан, Бигэ Айыы</NavLink>
            <br />
            <br />
            <NavLink to="/Sixth8">Ситэри Хаан, Ситэри Айыы</NavLink>
            <br />
            <br />
            <NavLink to="/Seventh8">Толору Хаан, Толору Айыы</NavLink>
            <br />
            <br />
          </ul>
        </article>
        <div className="ipostasi">
          <br />
          <h2>
            Владыки Состояния (Турук айыылара) образуют восьмую основную
            ипостась Аар Тойон, помещаемая на восьмом фрагменте третьего круга
            (Билии).
          </h2>
          <br />
          Могучий Владыка (Одун Хаан).
          <br />
          Строгий Владыка (Чыҥыс Хаан).
          <br />
          <br />
          <p>
            {" "}
            <br />
            И1. Почтенный Вершитель Судьбы (Аан Хаан, Аан Турук Айыы).
            <br />
            И2. Средний Владыка (Ортоку Хаан, Ортоку Айыы). Помогает человеку
            найти своё место в жизни.
            <br />
            И8. Владыка Бытия (Туруу Хаан, Туруу Айыы).
            <br />
            И4. Крепкий Владыка (Бөҕө Хаан, Бөҕө Айыы).
            <br />
            И5. Надежный Владыка (Бигэ Хаан, Бигэ Айыы).
            <br />
            И6. Совершенный Владыка (Ситэри Хаан, Ситэри Айыы).
            <br />
            И8. Владыка Удачи (Толору Хаан, Толору Айыы).
            <br />
          </p>
        </div>
      </div>
    );
  }
}
