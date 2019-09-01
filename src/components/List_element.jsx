import React from 'react';
import '../sass/linked_list.scss';
export default class List_element extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      translated: props.translated,
      class: ""
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const classList = this.state.class;
    console.log(this);
    this.setState({
        class: classList == "" ? "active" : ""
    });
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
                  <li>Add element above</li>
                  <li>Add element below</li>
                  <li>Delete element</li>
              </ul>
      </div>
    );
  }
}