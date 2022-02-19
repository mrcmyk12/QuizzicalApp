import React from "react";
import QuestionAnswerDuo from "./QuestionAnswerDuo";

class EntertainmentQuestions extends React.Component {
	render() {
		return (
			<div>
				<QuestionAnswerDuo
					questions={this.props.entertainmentQuestions}
					incorrectAnswers={this.props.entertainmentIncorrectAnswers}
					correctAnswers={this.props.entertainmentCorrectAnswers}
				/>
			</div>
		);
	}
}

export default EntertainmentQuestions;
