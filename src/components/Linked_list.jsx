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
      inputValue: "",
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addElementAbove = this.addElementAbove.bind(this);
    this.addElementBelow = this.addElementBelow.bind(this);
    this.getNewId = this.getNewId.bind(this);
    this.moveBelowElements = this.moveBelowElements.bind(this);
  }

  hideModal(e) {
    this.setState({
      inputValue: "",
      showModal: false
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  moveBelowElements(elementId) {
    const elements = this.state.list;
    const basePixels = 12;
    let currentElement = elements;
    let baseElementWasFound = false;
    let prevAmountOfPixels = "";
    while (currentElement !== null) {
      if(baseElementWasFound) {
        prevAmountOfPixels = Number(currentElement.translated_pixels.match(/\d+/g)[0]);
        currentElement.translated_pixels = (prevAmountOfPixels + basePixels) + "px";
      }
      if(currentElement.key == elementId) {
        baseElementWasFound = true;
      }
      currentElement = currentElement.next;
    }
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
                <input type="text" name="data" onChange={this.handleInputChange}/>
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

  getNewId() {
    let currentElement = this.state.list;
    let currentId = this.state.list.key;
    let newId = 0;

    while(currentElement !== null) {
      currentElement = currentElement.next;
      if (currentElement !== null) {
        currentId = currentElement.key < currentId ? currentId : currentElement.key;
      }
    }

    newId = currentId + 1;
    return newId;
  }

  addElementAbove(id, data) {
     const nextId = this.getNewId(); 
     let currentList = this.state.list;
     let listAux = currentList;
     let currentElement = currentList;
     let prevElement = "";
     let newElement = {
       key: id,
       data: data,
       translated_pixels: "72px",
       next: null
     }

       while (currentElement !== null) {
         if (currentElement.key === id) {
           newElement.key = nextId;
           newElement.next = currentElement;
           newElement.translated_pixels = currentElement.translated_pixels;
          if(prevElement === "") {
            currentList = newElement;
          } else {
            prevElement.next = newElement;
          }
          this.moveBelowElements(newElement.key);
           break;
          } else {
            prevElement = currentElement;
            currentElement = currentElement.next;
          }
        }
        this.setState({
          list: currentList
        });
  }

  addElementBelow(id, data) {

  }
  addElement(e) {
    e.preventDefault();
    const elementId = this.state.elementSelectedId;
    const elementPosition = this.state.newElementPosition;
    const dataToSave = this.state.inputValue;
    
    if(elementPosition === "above") {
      this.addElementAbove(elementId, dataToSave);
    } else {
      this.addElementBelow(elementId, dataToSave);
    } 
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