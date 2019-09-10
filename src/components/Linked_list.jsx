import React from 'react';
import '../sass/linked_list.scss';
import List_element from './List_element';

export default class Linked_list extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
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
    this.addElementAbove = this.addElementAbove.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    if(this.state.showModal) {
      return (
        <div className="overlay">
          <div className="modal">
            <h3>Add Element</h3>
            <form>
              <label htmlFor="">Data:
                <input type="text"/>
              </label>
              <div className="buttons-container">
                <button>Add</button>
                <button>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  addElementAbove(elementId) {
    this.setState({
      showModal: true
    });
    let list = this.state.list;
    let currentElement = list;
    let prevElement = "";
    let newElement = {
      key: 3,
      data: "86",
      translated_pixels: "72px",
      next: null
    }
    //let newList = {}

    while(currentElement !== null) {
      if (currentElement.key === elementId) {
        newElement.next = currentElement;
        if (prevElement === "") {
          list = newElement;
        } else {
          prevElement.next = newElement;
        }
        break;
      } else {
        prevElement = currentElement;
        currentElement = currentElement.next;
      }
    }
    this.setState({
      list: list
    });
      
  }

  getListElements() {
    const elements = this.state.list;
    let currentElement = elements;
    let htmlElements = [];
    while (currentElement !== null) {
      htmlElements.push(
        <List_element 
          id={currentElement.key}
          key={currentElement.key} 
          data={currentElement.data} 
          translated={currentElement.translated_pixels}
          addElementAbove={this.addElementAbove}
        />);
      currentElement = currentElement.next;
    }
    return htmlElements;
  }

  render() {
    return (
      <div className="linked_list">
        {this.showModal()}
        <h1>Linked list</h1>
        <div className="list-container">
          {this.getListElements()}
        </div>
      </div>
    );
  }
}