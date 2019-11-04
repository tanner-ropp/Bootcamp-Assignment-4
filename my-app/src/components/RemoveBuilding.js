import React from 'react';

class RemoveBuilding extends React.Component {
  render() {
    return(
      <button
        type="button"
        onClick={() => this.props.deleteBuilding(this.props.selectedBuilding)}
      >
        DELETE
      </button>
  )}
}

export default RemoveBuilding;
