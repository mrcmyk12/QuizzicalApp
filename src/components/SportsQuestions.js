import React from "react";
import RenderQuestion from "./RenderQuestion";
import RenderAnswers from "./RenderAnswers";

class SportsQuestions extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<RenderQuestion questions={this.props.sportsQuestions} />
				<RenderAnswers
					incorrectAnswers={this.props.sportsIncorrectAnswers}
					correctAnswers={this.props.sportsCorrectAnswers}
				/>
			</div>
		);
	}
}

export default SportsQuestions;
