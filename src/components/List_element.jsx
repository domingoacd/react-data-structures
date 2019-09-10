import React from 'react';
import '../sass/linked_list.scss';
export default class List_element extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      data: props.data,
      translated: props.translated,
      class: ""
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.elementAbove = this.elementAbove.bind(this);
    this.elementBelow = this.elementBelow.bind(this);
  }

  toggleMenu() {
    const classList = this.state.class;
    this.setState({
        class: classList === "" ? "active" : ""
    });
  }
  
  elementAbove() {
    const elementId = this.props.id;
    this.props.addElementAbove(elementId);
  }

  elementBelow() {
    const elementId = this.props.id;
    this.props.addElementAbove(elementId);
  }

  render() {
      const style = {
          transform: `translateX(${this.state.translated})`
      }
      const classes = this.state.class;

    return (
      <div className={`list_element ${classes}`} style={style}>
          <h3 className="element-data">{this.state.data}</h3>
          <div className="toggle_menu" onClick={this.toggleMenu}>
              >
          </div>
              <ul className="menu">
                  <li onClick={this.elementAbove}>Add element above</li>
                  <li onClick={this.elementBelow}>Add element below</li>
                  <li onClick={this.deleteElement}>Delete element</li>
              </ul>
      </div>
    );
  }
}