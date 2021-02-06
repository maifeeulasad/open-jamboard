import React from "react";

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isDrawing: false,
            offsetX: 0,
            offsetY: 0,
            startX: 0,
            startY: 0,
            canvasRef: undefined,
            ctx: undefined,
            colorPrimary: 'black',
            colorSecondary: 'white',
            height: window.innerHeight,
            width: window.innerWidth,
            pickedItem: "Pen"
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.pickedItem!==prevProps.pickedItem){
            console.log(this.props.pickedItem)
            this.setState({
                pickedItem: this.props.pickedItem
            })
        }
    }

    canvasElem = (elem) => {
        this.setState({
            canvasRef: elem,
            ctx: elem.getContext('2d')
        })
    }

    handleMouseDown(e) {
        let ctx = this.state.ctx;
        ctx.strokeStyle = this.state.colorPrimary;
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        this.setState({
            ctx:ctx,
            isDrawing : true,
        })

        this.state.ctx.moveTo(
            e.clientX - this.state.offsetX,
            e.clientY - this.state.offsetY
        );
    }

    handleMouseMove(e) {
        if (this.state.isDrawing) {
            this.state.ctx.lineTo(
                e.clientX - this.state.offsetX,
                e.clientY - this.state.offsetY
            );
            this.state.ctx.stroke();
        }
    }

    handleMouseUp(e) {
        this.setState({isDrawing: false});
    }

    render() {
        return (
            <canvas
                width={this.state.width}
                height={this.state.height}
                ref={this.canvasElem}
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
            />
        );
    }
}

export default Board;