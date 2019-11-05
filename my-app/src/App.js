import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  deleteBuilding(newData,id) {
    this.setState({
      data: newData
    });

    if (this.state.selectedBuilding === id){
      this.setState({
        selectedBuilding: 0
      })
    }
  }

  addBuilding(newData) {
    this.setState({
      data: newData
    })
  }

  render() {

    return (
      <div className="bg">
        <div className="row p-3 mb-2 bg-primary text-white">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr className="fixedHeader">
                      <th scope="col">Code</th>
                      <th scope="col" colspan="2">Building</th>
                    </tr>
                  </thead>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    deleteBuilding={this.deleteBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.data}
              />
              <div>
                <b>Add Building to Directory:</b>
                <AddBuilding addBuilding={this.addBuilding.bind(this)} data={this.state.data}/>
              </div>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
