import React from 'react';
import "../sass/mainView.scss";
import Card from './Card';
export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structures: [
        {
          "name": "linked list",
          "thumb": "",
          "link": "linked-list",
          "key": '000' 
        },
        {
          "name": "stack",
          "thumb": "",
          "link": "stack",
          "key": '001' 
        },
        {
          "name": "qeue",
          "thumb": "",
          "link": "queue",
          "key": '002' 
        }
      ]
    }
  }

  getCards() {
    const cards = this.state.structures;
    return cards.map(card => <Card cardName={card.name} cardImage={card.thumb} cardLink={card.link} key={card.key}/>);
  }

  render() {
    return (
      <div className="main-view">
        <h1 className="main-title">Data Structures</h1>
        <div className="cards-container">
         {this.getCards()}
        </div>
      </div>
    );
  }
}