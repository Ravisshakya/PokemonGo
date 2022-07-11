import React, { Component } from 'react';

export class PokeMonGo extends Component {
    static displayName = PokeMonGo.name;

    constructor(props) {
        super(props);
        this.state = { pokemons: [], loading: true };
    }

    componentDidMount() {
        this.populatePokemonData();
    }

    static renderPokemonsTable(pokemons) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Type</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Weaknesses</th>
                        <th>Next Evolution</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map(pokem =>
                        <tr key={pokem.id}>
                            <td>{pokem.name}</td>
                            <td>{pokem.num}</td>
                            <td>{pokem.type.join(', ')}</td>
                            <td>{pokem.height}</td>
                            <td>{pokem.weight}</td>
                            <td>{pokem.weaknesses.join(', ')}</td>
                            <td>{pokem.next_evolution_val}</td>
                            <td><img src={pokem.img} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PokeMonGo.renderPokemonsTable(this.state.pokemons);

        return (
            <div>
                <h1 id="tabelLabel" >Pokemons Data</h1>
                <p>This component demonstrates fetching data for the pokemons.</p>
                {contents}
            </div>
        );
    }

    async populatePokemonData() {
        const response = await fetch('pokemongo');
        const data = await response.json();
        this.setState({ pokemons: data, loading: false });
    }
}
