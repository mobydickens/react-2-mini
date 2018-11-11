import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="textContainer">
        <textarea 
          style={ {fontFamily: this.props.fontFamily, fontSize: this.props.fontSize, color: this.props.fontColor} }
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}



// * Open `TextContainer.js` from `src/components/`.
// * Bind the `updateText` method to `this` in the `constructor` method.
// * In the `textarea` tag there is a `style` prop, this is where we need to add the styling that's being passed to this component through props. 
//   * Uncomment the `style` prop.
//   * Set `fontFamily`, `fontSize` and `color` equal to the appropriate props values.



