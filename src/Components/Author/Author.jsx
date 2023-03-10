import React from "react";
import "./Author.scss";
import Axmad from "../../images/Axmad.png";
import autrs from "../../images/autors.png";
import Jaloba from "../../images/Jaloba.png";

function Author() {
  return (
    <div className="author__inner author__container">
      <div className="author__inner__out">
      <div className="author__inner__div">
        <img className="author__inner__div__logo" src={Axmad} alt="Ahmad" />
        <div>
          <h2 className="author__inner__div__h2">Ahmad G’aniyev</h2>
          <span className="author__inner__div__span">Был в сети: 15:32</span>
          <p className="author__inner__div__p">Все обекты автора</p>
        </div>
      </div>
      <img className="author__inner" src={autrs} alt="Line" />
      <p className="author__inner__p">
        If you do what you've always done, you'll get what you've always gotten.
      </p>
      <button className="author__inner__btn">
        <p className="author__inner__btn__p">Все апартаменты автора</p>
        <svg
          width={11}
          height={10}
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.833252 0.833328L4.99992 5L0.833252 9.16666M5.83325 0.833328L9.99992 5L5.83325 9.16666"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      </div>
      <iframe
        className="author__inner__map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2997.6859573149886!2d69.35506201545569!3d41.2939387792728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sr.M.Ulugbek%2C%20str.Boburiy%20135%20A!5e0!3m2!1suz!2s!4v1676371620819!5m2!1suz!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div>
        <img src={Jaloba} alt="Jaloba" />
      </div>
    </div>
  );
}

export default Author;
