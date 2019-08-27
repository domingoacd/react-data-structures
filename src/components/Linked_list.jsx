import React from 'react';
import '../sass/linked_list.scss';
export default class Linked_list extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: {
        key: 0,
        data: "12",
        next: {
          data: "02",
          next: {
            data: "35",
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
      const html = <div>{currentElement.data}</div>
      htmlElements.push(html);
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