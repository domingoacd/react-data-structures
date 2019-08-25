import React from 'react';
import {Link} from "react-router-dom";

import '../sass/card.scss'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'title': props.cardName,
      'image': props.cardImage,
      'link': props.cardLink
    }
  }
  render() {
    const {title, image, link} = this.state;
    return (
      <div className="card">
        <Link to={link} className="link">
          <img src={image} alt={title} className="image"/>
          <h3 className="title">{title}</h3>
        </Link>
      </div>
    );
  }
}