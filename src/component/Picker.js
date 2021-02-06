import React from 'react';
import penIcon from '../asset/pen.svg';
import eraserIcon from '../asset/eraser.svg';
import '../style/picker.css';

class Picker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 20,
            height: 20,
            items: [
                {name: "Pen", icon: penIcon},
                {name: "Eraser", icon: eraserIcon},
            ],
            pickedItem: {name: "Pen", icon: penIcon}
        }

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick = (item) => {
        this.setState({
            pickedItem:item
        })
    }

    renderItems = () => {
        return this.state.items.map((item) => {
            return (
                <div
                    onClick={() => {this.onItemClick(item)}}
                    className={this.state.pickedItem.name === item.name ? "picked" : ""}>
                    <img
                        src={item.icon}
                        alt={item.name}
                        height={this.state.height}
                        width={this.state.width}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={"picker"}>
                {this.renderItems()}
            </div>
        )
    }

}

export default Picker;