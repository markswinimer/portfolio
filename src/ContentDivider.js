import React, { Component } from 'react';

class ContentDivider extends Component {
  render() {

    const { startPositionColor } = this.props;
    return(
      <div className="ContentDivider">
        <div className={`ContentDivider-top-${startPositionColor}`}></div>
        <div className={`ContentDivider-bottom-${startPositionColor}`}></div>
      </div>
    )
  }
}
export default ContentDivider;
