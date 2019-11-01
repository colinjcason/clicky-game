import React from "react";
import CharactersCard from "./components/CharactersCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import characters from "./characters.json";

class App extends React.Component {
    state = {
        characters,
        score: 0,
        topScore: 0
    };

    handleClick() {
        const {score, topScore} = this.state;
        const shuffleCharacters = this.state.characters;

        return this.setState({
            characters: shuffleCharacters.sort(() => Math.random() - 0.5),
        });
    };
 

    render() {
        return (
            <div>
            <NavBar name="South Park Game!"></NavBar>
            <Wrapper>
            {this.state.characters.map(characters => (
                <CharactersCard 
                key={characters.id}
                id={characters.id}
                name={characters.name}
                image={characters.image}
                onClick={() => this.handleClick()}
            />
            ))
            }
            </Wrapper>
            </div>
        );
    }
};

export default App;