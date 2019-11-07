import React from "react";
import CardCss from "./Card.module.css";
import { User } from "../../assets/people-pic/index";
const Card = props => {
  return (
    <div className={CardCss.mainHolder}>
      {props.people.map(element => (
        <div className={CardCss.singleCard}>
          <div className={CardCss.picture}>
            <img src={element.pic} alt="Person"></img>
          </div>
          <div className={CardCss.content}>
            <div className={CardCss.header}>{element.name}</div>
            <div className={CardCss.tagLink}>
              <a href="#0">{element.tag}</a>
            </div>
            <div className={CardCss.description}>{element.description}</div>
          </div>
          <div className={CardCss.foot}>
            <img src={User} alt="UserIcon" className={CardCss.icon}></img>
            <span>{element.friends + " Friends"}</span>
            <span className={CardCss.joinRight}>{element.join}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
