import React from 'react'

class AddBuilding extends React.Component {
  render(){
    return (
      <form>
				<input
					type="text"
					ref={(value) => this.myValue = value}
					placeholder="Name"
				/>
        <input
					type="text"
					ref={(value) => this.myValue = value}
					placeholder="Code"
				/>
        <input
					type="text"
					ref={(value) => this.myValue = value}
					placeholder="Address"
				/>
        <input
					type="text"
					ref={(value) => this.myValue = value}
					placeholder="Latitude"
				/>
        <input
					type="text"
					ref={(value) => this.myValue = value}
					placeholder="Longitude"
				/>
        <button type="button">ADD</button>
			</form>
  )}
}

export default AddBuilding;
