import React, { Component } from 'react';

class Divider extends Component {
  render() {

    const { startPositionColor } = this.props;
    return(
      <div className="Divider">
        <div className={`Divider-top-${startPositionColor}`}></div>
        <div className={`Divider-bottom-${startPositionColor}`}></div>
      </div>
    )
  }
}
export default Divider;
