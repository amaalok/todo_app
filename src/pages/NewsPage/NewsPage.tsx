import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./NewsPage.module.css";

function NewsPage() {
  const [news, setNews] = useState([]);
  let navigate = useNavigate();

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-04-16&sortBy=publishedAt&apiKey=f10f8ce59ba641caa684d0f5b265616e"
      )
      .then((response) => {
        setNews(response.data.articles);
      });
  };
  if (news.length > 0) {
    console.log(news);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { name } = useParams();
  return (
    <React.Fragment>
      <div className={classes["btn-container"]}>
        <button
          className={classes.btn}
          onClick={() => {
            navigate("/");
          }}
        >
          Todo
        </button>
        <button onClick={getNews} className={classes.btn}>
          Get News
        </button>
      </div>

      <div className={classes.container}>
        {news.length > 0 &&
          news.map((items) => (
            <div className={classes.card}>
              <img src={items["urlToImage"]} alt="" className={classes.img} />
              <p>{items["author"]}</p>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default NewsPage;
