import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SportsQuestions from "./SportsQuestions";
import HistoryQuestions from "./HistoryQuestions";

class App extends React.Component {
	state = {
		sportsQuestions: [],
		sportsCorrectAnswers: [],
		sportsIncorrectAnswers: [],
		entertainmentQuestions: [],
		entertainmentCorrectAnswers: [],
		entertainmentIncorrectAnswers: [],
		historyQuestions: [],
		historyCorrectAnswers: [],
		historyIncorrectAnswers: [],
		geographyQuestions: [],
		geographyCorrectAnswers: [],
		geographyIncorrectAnswers: []
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
		//Get History Questions
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
				{}
			)
			.then((response) => {
				for (let i = 0; i < response.data.results.length; i++) {
					this.state.historyQuestions.push(
						response.data.results[i]["question"]
					);
					this.state.historyCorrectAnswers.push(
						response.data.results[i]["correct_answer"]
					);
					for (
						let j = 0;
						j < response.data.results[i]["incorrect_answers"].length;
						j++
					) {
						this.state.historyIncorrectAnswers.push(
							response.data.results[i]["incorrect_answers"][j]
						);
					}
				}
			});

		//Get Entertainment:Film Questions
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
				{}
			)
			.then((response) => {
				for (let i = 0; i < response.data.results.length; i++) {
					this.state.entertainmentQuestions.push(
						response.data.results[i]["question"]
					);
					this.state.entertainmentCorrectAnswers.push(
						response.data.results[i]["correct_answer"]
					);
					for (
						let j = 0;
						j < response.data.results[i]["incorrect_answers"].length;
						j++
					) {
						this.state.entertainmentIncorrectAnswers.push(
							response.data.results[i]["incorrect_answers"][j]
						);
					}
				}
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
				<HistoryQuestions 
					historyQuestions={this.state.historyQuestions}
					historyCorrectAnswers={this.state.historyCorrectAnswers}
					historyIncorrectAnswers={this.state.historyIncorrectAnswers}
				/>
			</div>
		);
	}
}

export default App;
