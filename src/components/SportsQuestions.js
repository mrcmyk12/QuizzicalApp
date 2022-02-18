import React from "react";
import RenderQuestion from "./RenderQuestion";
import RenderAnswers from "./RenderAnswers";
import QuestionAnswerDuo from "./QuestionAnswerDuo";

class SportsQuestions extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<QuestionAnswerDuo
					questions={this.props.sportsQuestions}
					incorrectAnswers={this.props.sportsIncorrectAnswers}
					correctAnswers={this.props.sportsCorrectAnswers}
				/>
			</div>
		);
	}
}

export default SportsQuestions;
