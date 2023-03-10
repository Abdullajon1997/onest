import React from "react";
import "./Recent.scss";
import Просмотры from "../Просмотры/Просмотры";

function Recent({ isVisible, currentRef }) {
  return (
    <>
      <div className="recent" >
        {/* <div className="container"> */}
          <div className="recent__inner" ref={currentRef} style={{ height:isVisible ? "443px":"0px" }}>
            <h2 className="recent__inner__h2">Recent searches</h2>

            <div className="recent__inner__first">
              <button className="recent__inner__search">Квартира 90 кв</button>
              <button className="recent__inner__search">Чиланзар</button>
              <button className="recent__inner__search">
                Дома в Самарканде
              </button>
              <button className="recent__inner__search">Дача ховли</button>
              <button className="recent__inner__search">
                Земелные участки
              </button>
            </div>

            <h2 className="recent__inner__h2">Популярные теги</h2>
            <div className="recent__inner__first">
              <button className="recent__inner__search">Квартира 90 кв</button>
              <button className="recent__inner__search">Чиланзар</button>
              <button className="recent__inner__search">
                Дома в Самарканде
              </button>
              <button className="recent__inner__search">Дача ховли</button>
            </div>
            <span className="recent__inner__span">Top просмотры</span>
            <div className="recent__inner__top">
              <Просмотры />
              <Просмотры />
              <Просмотры />
              <Просмотры />
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Recent;
