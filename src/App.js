import React from "react";
import CharactersCard from "./components/CharactersCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import characters from "./characters.json";

class App extends React.Component {
    state = {
        characters,
        score: 0,
        topScore: 0,
        message: "Click an image to begin!"
    };

    handleClick = (id, clicked) => {
        const shuffleCharacters = this.state.characters;

        if(clicked) {
            shuffleCharacters.forEach((characters, index) => {
                shuffleCharacters[index].clicked = false;
            });

            return this.setState({
                characters: shuffleCharacters.sort(() => Math.random() - 0.5),
                message: "You guessed incorrectly",
                score: 0
            });
        } else {
            shuffleCharacters.forEach((characters, index) => {
                if(id === characters.id) {
                    shuffleCharacters[index].clicked = true;
                }
            });
            const {topScore, score} = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                characters: shuffleCharacters.sort(() => Math.random() - 0.5),
                message: "You guessed correctly!",
                score: newScore,
                topScore: newTopScore
            });
        }      
    };
 

    render() {
        return (
            <div>
            <NavBar 
            name="South Park Game!" 
            score={this.state.score}
            topScore={this.state.topScore}>
            </NavBar>
            <p>{this.state.message}</p>
            <Wrapper>
            {this.state.characters.map(characters => (
                <CharactersCard 
                key={characters.id}
                id={characters.id}
                name={characters.name}
                image={characters.image}
                clicked={characters.clicked}
                handleClick={this.handleClick}
            />
            ))
            }
            </Wrapper>
            </div>
        );
    }
};

export default App;