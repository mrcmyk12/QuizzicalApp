import "./RenderAnswers.css";
import { Button } from "reactstrap";
import React from "react";

class RenderAnswers extends React.Component {
	state = {};

	render() {
		return (
			<div className="container" style={{ textAlign: "center" }}>
				<div className="row">
					<div className="col">
						<Button className="question-button">
							{this.props.answer1}
						</Button>
					</div>
					<div className="col">
						<Button className="question-button">
							{this.props.answer2}
						</Button>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Button className="question-button">
							{this.props.answer3}
						</Button>
					</div>
					<div className="col">
						<Button className="question-button">
							{this.props.answer4}
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default RenderAnswers;
