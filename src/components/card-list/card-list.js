import React, {Component} from 'react'
import Card from '../card/card'
import './card-list.css'
class CardList extends React.Component{
    render(){
        return(
            <div className="card-list">{this.props.monsters.map(monster => (
                <Card key={monster.id} monster ={monster}/>
            ) )}</div>
        )
    }
}

export default CardList