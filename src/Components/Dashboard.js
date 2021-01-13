import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: {}
        }
    }

    getPokemon = () => {
        const rand = Math.ceil(Math.random() * 151);

        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
        .then(res => {
            this.setState({pokemon: res.data})
        })
        .catch(err => console.log(err));
    }

    componentDidMount(){
        this.props.getPokemon();
    }

    render(){
        const {pokemon} = this.state;

        return (
            <main className='dashboard'>
                <h1>Your Pokemon</h1>
                <section>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <h3>{pokemon.name}</h3>
                    <button>Change Pokemon</button>
                </section>
            </main>
        )
    }
}

export default Dashboard;