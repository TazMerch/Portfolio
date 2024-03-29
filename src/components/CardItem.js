import React from 'react';


function CardItem(props) {
  return (
    <>
        <li className="cards__item">
            <a className="cards__item__link" href={props.path} target="_blank" rel="noopener noreferrer">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travle img" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                    <a href={props.github} target="_blank" className="github" rel="noopener noreferrer">GitHub <i className="fa-brands fa-github"/></a>
                </div>
            </a>
        </li> 
    </>
  );
}

export default CardItem;
