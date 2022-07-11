import React, { Component } from 'react';

export class PokeMonGoV2 extends Component {
    static displayName = PokeMonGoV2.name;

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
                {pokemons.map(pokem =>
                    <tr key={pokem.id}>
                        <td> <img src={pokem.img} alt="" /> </td>
                        <td>
                            <div>
                                <b> Name: </b> {pokem.name} <br />
                                <b> Number: </b>{pokem.num} <br />
                                <b> Type: </b>{pokem.type.join(', ')} <br />
                                <b> Height: </b>{pokem.height} <br />
                                <b> Weight: </b>{pokem.weight} <br />
                                <b> Weaknesses: </b>{pokem.weaknesses.join(', ')} <br />
                                <b> Next Evolution: </b>{pokem.next_evolution_val}
                            </div>
                        </td>
                    </tr>
                )}
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PokeMonGoV2.renderPokemonsTable(this.state.pokemons);

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
