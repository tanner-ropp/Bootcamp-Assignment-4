import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {selectedBuilding, data} = this.props;
		const buildingSelected = (selectedBuilding > 0);
		return (
			<div>
				<p>
					{' '}
					{!buildingSelected && <i>Click on a name to view more information</i>}
					{buildingSelected && (
						<div>
							<li>
								<i>Name: </i>
								{data[selectedBuilding-1].name}
							</li>
							<li>
								<i>Code: </i>
								{data[selectedBuilding-1].code}
							</li>
							{data[selectedBuilding-1].address && (
								<li>
									<i>Address: </i>
									{data[selectedBuilding-1].address}
								</li>
							)}
							{data[selectedBuilding-1].coordinates && (
								<li>
									<i>Coordinates: </i>
									{data[selectedBuilding-1].coordinates.latitude + ', ' + data[selectedBuilding-1].coordinates.longitude}
								</li>
							)}
						</div>
					)}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
