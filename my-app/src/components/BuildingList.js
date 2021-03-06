import React from 'react';
import RemoveBuilding from './RemoveBuilding.js'

// This could also be a stateless function (see tutorial)
class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;

		const buildingList = data
			.filter(directory=> {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td onClick={() => this.props.selectedUpdate(directory.id)}> {directory.code} </td>
						<td onClick={() => this.props.selectedUpdate(directory.id)}> {directory.name} </td>
						<td>
							<RemoveBuilding deleteBuilding={this.props.deleteBuilding} selectedBuilding={directory.id} data={data}/>
						</td>
					</tr>
				);
			});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuildingList;
