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

  addElementAbove(id, data) {
    console.log(data);
     let list = this.state.list;
     let currentElement = list;
     let prevElement = "";
     let newElement = {
       key: id,
       data: data,
       translated_pixels: "72px",
       next: null
     }
     let newList = {}

     while (currentElement !== null) {
       prevElement = currentElement;
       if (currentElement.key === id) {
         newElement.next = currentElement.next;
         newElement.translated_pixels = currentElement.translated_pixels;
         currentElement = newElement;
         break;
        } else {
          currentElement = currentElement.next;
       }

       if(!newList.hasOwnProperty('next')) {
         newList = prevElement;
       }
     }







    //  while(currentElement !== null) {
    //    if (currentElement.key === id) {
    //      newElement.next = currentElement.next;
    //      newElement.translated_pixels = currentElement.translated_pixels;
    //      if (prevElement === "") {
    //        list = newElement;
    //      } else {
    //        prevElement.next = newElement;
    //      }
    //      break;
    //    } else {
    //      prevElement = currentElement;
    //      currentElement = currentElement.next;
    //    }
    //  }
     this.setState({
       list: newList
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