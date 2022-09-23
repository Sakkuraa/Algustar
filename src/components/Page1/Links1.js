import { NavLink } from "react-router-dom";
import React from "react";
import s from "./Page1.module.css";

const LinkItem = (props) => {
  let path = "/" + props.id;
  return (
    <div className={s.link}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Links1 = (props) => {
  let namesData = [
    { id: "First1", name: "Аан Айыыһыт" },
    { id: "Second1", name: "Имэҥ Айыыһыт, Дьалыҥ Айыыһыт" },
    { id: "Third1", name: "Хороҥ Айыыһыт, Ньэлбэй Айыыһыт" },
    { id: "Fourth1", name: "Ахтар Айыыһыт" },
    { id: "Fifth1", name: "Хан Айыыһыт" },
    { id: "Sixth1", name: "Күбэй Айыыһыт" },
    { id: "Seventh1", name: "Эдьэн Айыыһыт" },
  ];
  return (
    <article>
      <ul>
        <LinkItem name={namesData[0].name} id={namesData[0].id} />
        <LinkItem name="Имэҥ Айыыһыт, Дьалыҥ Айыыһыт" id="Second1" />
        <LinkItem name="Хороҥ Айыыһыт, Ньэлбэй Айыыһыт" id="Third1" />
        <LinkItem name="Ахтар Айыыһыт" id="Fourth1" />
        <LinkItem name="Хан Айыыһыт" id="Fifth1" />
        <LinkItem name="Күбэй Айыыһыт" id="Sixth1" />
        <LinkItem name="Эдьэн Айыыһыт" id="Seventh1" />
      </ul>
    </article>
  );
};
export default Links1;
