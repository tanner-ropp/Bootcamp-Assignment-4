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
        className="btn btn-outline-danger btn-sm"
        onClick={() => this.deleteBuilding()}
      >
        Delete
      </button>
  )}
}

export default RemoveBuilding;
