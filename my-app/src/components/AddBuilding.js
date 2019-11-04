import React from 'react'

class AddBuilding extends React.Component {
  addBuilding() {
    const newBuilding = {
      "id":this.props.data[this.props.data.length-1].id + 1,
      "name":this.refs.name.value,
      "code":this.refs.code.value,
      "address":this.refs.address.value,
    }
    if (this.refs.latitude.value !== "" && this.refs.longitude.value !== ""){
      newBuilding.coordinates = {
        "latitude":this.refs.latitude.value,
        "longitude":this.refs.longitude.value
      }
    }

    console.log(newBuilding);
    const newData = this.props.data.concat(newBuilding);
    console.log(newData);

    this.refs.name.value = '';
    this.refs.code.value = '';
    this.refs.address.value = '';
    this.refs.latitude.value = '';
    this.refs.longitude.value = '';

    this.props.addBuilding(newData);
  }

  render(){
    return (
      <form>
				<input
					type="text"
					ref="name"
					placeholder="Name"
				/>
        <input
					type="text"
					ref="code"
					placeholder="Code"
				/>
        <input
					type="text"
					ref="address"
					placeholder="Address"
				/>
        <input
					type="text"
					ref="latitude"
					placeholder="Latitude"
				/>
        <input
					type="text"
					ref="longitude"
					placeholder="Longitude"
				/>
        <button
          type="button"
          onClick={() => this.addBuilding()}
        >
          ADD
        </button>
			</form>
  )}
}

export default AddBuilding;
