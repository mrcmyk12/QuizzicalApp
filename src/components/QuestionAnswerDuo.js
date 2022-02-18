import React from "react";
import "./QuestionAnswerDuo.css";
import RenderQuestion from "./RenderQuestion";
import RenderAnswers from "./RenderAnswers";

class QuestionAnswerDuo extends React.Component {
	state = {};

	render() {
		console.log(this.props);
		return (
			<div>
				<div className="container">
					<div className="row">
                        <div className="col">
						<RenderQuestion question={this.props.questions[0]} />
                        </div>
					</div>
					<div className="row">
						<RenderAnswers
							answer1={this.props.incorrectAnswers[0]}
							answer2={this.props.incorrectAnswers[1]}
							answer3={this.props.incorrectAnswers[2]}
							answer4={this.props.correctAnswers[0]}
						/>
					</div>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[1]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[3]}
						answer2={this.props.incorrectAnswers[4]}
						answer3={this.props.incorrectAnswers[5]}
						answer4={this.props.correctAnswers[1]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[2]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[6]}
						answer2={this.props.incorrectAnswers[7]}
						answer3={this.props.incorrectAnswers[8]}
						answer4={this.props.correctAnswers[2]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[3]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[9]}
						answer2={this.props.incorrectAnswers[10]}
						answer3={this.props.incorrectAnswers[11]}
						answer4={this.props.correctAnswers[3]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[4]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[12]}
						answer2={this.props.incorrectAnswers[13]}
						answer3={this.props.incorrectAnswers[14]}
						answer4={this.props.correctAnswers[4]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[5]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[15]}
						answer2={this.props.incorrectAnswers[16]}
						answer3={this.props.incorrectAnswers[17]}
						answer4={this.props.correctAnswers[5]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[6]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[18]}
						answer2={this.props.incorrectAnswers[19]}
						answer3={this.props.incorrectAnswers[20]}
						answer4={this.props.correctAnswers[6]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[7]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[21]}
						answer2={this.props.incorrectAnswers[22]}
						answer3={this.props.incorrectAnswers[23]}
						answer4={this.props.correctAnswers[7]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[8]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[24]}
						answer2={this.props.incorrectAnswers[25]}
						answer3={this.props.incorrectAnswers[26]}
						answer4={this.props.correctAnswers[8]}
					/>
				</div>
				<div className="container">
					<RenderQuestion question={this.props.questions[9]} />
					<RenderAnswers
						answer1={this.props.incorrectAnswers[27]}
						answer2={this.props.incorrectAnswers[28]}
						answer3={this.props.incorrectAnswers[29]}
						answer4={this.props.correctAnswers[9]}
					/>
				</div>
			</div>
		);
	}
}

export default QuestionAnswerDuo;
