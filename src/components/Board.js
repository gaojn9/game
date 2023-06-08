import React,{ Component } from 'react'
import Square from './Square'
import  './Board.css'


class Board extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    getSquareUI(pos){
        const { squares } = this.props
        return (
        <Square pos={pos} info={squares[pos]} onClick={this.props.onClickSquare}/>)
    }
    render(){
        
        return (
            <div className='board'>
                <div className='row'>
                    {this.getSquareUI(0)}
                    {this.getSquareUI(1)}
                    {this.getSquareUI(2)}
                    
                </div>
                <div className='row'>
                    {this.getSquareUI(3)}
                    {this.getSquareUI(4)}
                    {this.getSquareUI(5)}
                    
                </div>
                <div className='row'>
                    {this.getSquareUI(6)}
                    {this.getSquareUI(7)}
                    {this.getSquareUI(8)}
                    
                </div>
            </div>
        )
    }
}

export default Board;