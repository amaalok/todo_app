import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import classes from "./AddTodo.module.css";
const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];
const AddTodo = () => {
  const { t } = useTranslation();
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todoChangeHandler = (event: any) => {
    setTodo(event.target.value);
  };
  const todoSubmit = (event: any) => {
    event.preventDefault();
    if (todo.trim().length === 0) {
      alert("Task cannot be empty");
      setTodo("");
      return;
    }
    dispatch(
      addTodo({
        todo: todo,
      })
    );
    setTodo("");
  };
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t("Select Language")}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h1 className={classes.addTodo}>{t("todos")}</h1>
      <form onSubmit={todoSubmit} className={classes.form}>
        <input
          type="text"
          placeholder={t("What needs to be done?")}
          onChange={todoChangeHandler}
          value={todo}
          className={classes.inputTodo}
        />
      </form>
      <p>{todo}</p>
    </div>
  );
};
export default AddTodo;
