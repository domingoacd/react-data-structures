import React from 'react';
import '../sass/linked_list.scss';
import List_element from './List_element';

export default class Linked_list extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      elementSelectedId: "",
      newElementPosition: "",
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
    this.addElement = this.addElement.bind(this);
    this.activateModal = this.activateModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal(e) {
    this.setState({
      showModal: false
    })
  }

  activateModal(elementClickedId, positionWhereToAdd) {
    this.setState({
      showModal: true,
      elementSelectedId: elementClickedId,
      newElementPosition: positionWhereToAdd
    });
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
                <button onClick={this.addElement}>Add</button>
                <button onClick={this.hideModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

  addElement() {
    const elementId = this.state.elementSelectedId;
    const elementPosition = this.state.newElementPosition;
    console.log(elementId, elementPosition);

    // let list = this.state.list;
    // let currentElement = list;
    // let prevElement = "";
    // let newElement = {
    //   key: 3,
    //   data: "86",
    //   translated_pixels: "72px",
    //   next: null
    // }
    // //let newList = {}

    // while(currentElement !== null) {
    //   if (currentElement.key === elementId) {
    //     newElement.next = currentElement;
    //     if (prevElement === "") {
    //       list = newElement;
    //     } else {
    //       prevElement.next = newElement;
    //     }
    //     break;
    //   } else {
    //     prevElement = currentElement;
    //     currentElement = currentElement.next;
    //   }
    // }
    // this.setState({
    //   list: list
    // });
      
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
          activateModal={this.activateModal}
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