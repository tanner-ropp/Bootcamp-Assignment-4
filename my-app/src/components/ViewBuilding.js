import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding, data} = this.props;

		const selectedDirectory = data
			.filter(directory => {
				return directory.id === selectedBuilding
			})

		const buildingSelected = (selectedBuilding > 0);
		return (
			<div>
				<p>
					<b>Building Information:</b>
					<br/>
					{' '}
					{!buildingSelected && <i>Click on a name to view more information</i>}
					{buildingSelected && (
						<p>
							<li>
								<i>Name: </i>
								{selectedDirectory[0].name}
							</li>
							<li>
								<i>Code: </i>
								{selectedDirectory[0].code}
							</li>
							{selectedDirectory[0].address && (
								<li>
									<i>Address: </i>
									{selectedDirectory[0].address}
								</li>
							)}
							{selectedDirectory[0].coordinates && (
								<li>
									<i>Coordinates: </i>
									{selectedDirectory[0].coordinates.latitude + ', ' + selectedDirectory[0].coordinates.longitude}
								</li>
							)}
						</p>
					)}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
