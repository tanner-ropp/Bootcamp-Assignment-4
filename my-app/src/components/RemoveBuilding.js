import React from 'react';

class RemoveBuilding extends React.Component {
  deleteBuilding() {
    const id = this.props.selectedBuilding;

    console.log(id);

    const newData = this.props.data.filter(directory => {
      return directory.id !== id
    })

    this.props.deleteBuilding(newData, id);
  }

  render() {
    return(
      <button
        type="button"
        onClick={() => this.deleteBuilding()}
      >
        DELETE
      </button>
  )}
}

export default RemoveBuilding;
