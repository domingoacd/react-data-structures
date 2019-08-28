import React from 'react';
import '../sass/linked_list.scss';
import List_element from './List_element';

export default class Linked_list extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: {
        key: 0,
        data: "12",
        translated_pixels: "12px",
        next: {
          key: 1,
          data: "02",
          translated_pixels: "36px",
          next: {
            key: 2,
            data: "35",
            translated_pixels: "60px",
            next: null
          }
        }
      }
    }
  }

  getListElements() {
    const elements = this.state.list;
    let currentElement = elements;
    let htmlElements = [];
    while (currentElement !== null) {
      htmlElements.push(
        <List_element 
          key={currentElement.key} 
          data={currentElement.data} 
          translated={currentElement.translated_pixels}
        />);
      currentElement = currentElement.next;
    }
    return htmlElements;
  }

  render() {
    return (
      <div className="linked_list">
        <h1>Linked list</h1>
        <div className="list-container">
          {this.getListElements()}
        </div>
      </div>
    );
  }
}