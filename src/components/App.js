import axios from "axios";
import React from "react";
import SportsQuestions from "./SportsQuestions";

class App extends React.Component {
	state = {
		sportsQuestions: [],
		sportsCorrectAnswers: [],
		sportsIncorrectAnswers: [],
		entertainmentQuestions: [],
		historyQuestions: [],
		geographyQuestions: []
	};

	componentDidMount() {
		//Get Sports Questions
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
				{}
			)
			.then((response) => {
				console.log(response.data.results);
				for (let i = 0; i < response.data.results.length; i++) {
					this.state.sportsQuestions.push(
						response.data.results[i]["question"]
					);
					this.state.sportsCorrectAnswers.push(
						response.data.results[i]["correct_answer"]
					);
					for (
						let j = 0;
						j < response.data.results[i]["incorrect_answers"].length;
						j++
					) {
						this.state.sportsIncorrectAnswers.push(
							response.data.results[i]["incorrect_answers"][j]
						);
					}
				}
			});

		console.log(this.state.sportsIncorrectAnswers);
		console.log(this.state.sportsCorrectAnswers);
		console.log(this.state.sportsQuestions);

		//Get History Questions
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
				{}
			)
			.then((response) => {
				this.setState({ historyQuestions: response.data.results });
			});

		//Get Entertainment:Film Questions
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
				{}
			)
			.then((response) => {
				this.setState({ entertainmentQuestions: response.data.results });
			});

		//Get Geography Questions
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple",
				{}
			)
			.then((response) => {
				this.setState({ geographyQuestions: response.data.results });
			});
	}

	render() {
		return (
			<div>
				<SportsQuestions
					sportsQuestions={this.state.sportsQuestions}
					sportsCorrectAnswers={this.state.sportsCorrectAnswers}
					sportsIncorrectAnswers={this.state.sportsIncorrectAnswers}
				/>
			</div>
		);
	}
}

export default App;
