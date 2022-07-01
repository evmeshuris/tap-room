import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: []
    };
    this.handleClick = this.handleClick.bind(this); 
    this.handlePintsChange = this.handlePintsChange.bind(this); //new code
  }

  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
                  formVisibleOnPage: false });
  }
  //new code
  handlePintsChange(id) {
    const updatedKeg = Object.assign({}, this.state.mainKegList[id], {pint: this.state.mainKegList[id].pint-1});
    const updatedMainKegList = Object.assign({}, this.state.mainKegList, {[id]: updatedKeg});
    this.setState({mainKegList: updatedMainKegList});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List"; 
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} />;
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default KegControl;