import React from 'react';
import Picker from "./Picker";
import Board from "./Board";
import penIcon from "../asset/pen.svg";

class Wrapper extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            pickedItem: {name: "Pen", icon: penIcon}
        }
    }

    onItemPick = (item) => {
        this.setState({
            pickedItem: item
        })
    }

    render() {
        return(
            <div>
                <Picker onItemPick={this.onItemPick}/>
                <Board pickedItem={this.state.pickedItem}/>
            </div>
        )
    }

}

export default Wrapper;