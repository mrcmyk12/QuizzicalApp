import React from "react";

function RenderQuestionSelection(props) {
	console.log(props);

	let questionsArray = [];

	questionsArray.push(
		props.correctAnswers[0],
		props.incorrectAnswers[0],
		props.incorrectAnswers[1],
		props.incorrectAnswers[2]
	);
	questionsArray.push(
		props.correctAnswers[1],
		props.incorrectAnswers[3],
		props.incorrectAnswers[4],
		props.incorrectAnswers[5]
	);
	questionsArray.push(
		props.correctAnswers[2],
		props.incorrectAnswers[6],
		props.incorrectAnswers[7],
		props.incorrectAnswers[8]
	);
	questionsArray.push(
		props.correctAnswers[3],
		props.incorrectAnswers[9],
		props.incorrectAnswers[10],
		props.incorrectAnswers[11]
	);
	questionsArray.push(
		props.correctAnswers[4],
		props.incorrectAnswers[12],
		props.incorrectAnswers[13],
		props.incorrectAnswers[14]
	);
	questionsArray.push(
		props.correctAnswers[5],
		props.incorrectAnswers[15],
		props.incorrectAnswers[16],
		props.incorrectAnswers[17]
	);
	questionsArray.push(
		props.correctAnswers[6],
		props.incorrectAnswers[18],
		props.incorrectAnswers[19],
		props.incorrectAnswers[20]
	);
	questionsArray.push(
		props.correctAnswers[7],
		props.incorrectAnswers[21],
		props.incorrectAnswers[22],
		props.incorrectAnswers[23]
	);
	questionsArray.push(
		props.correctAnswers[8],
		props.incorrectAnswers[24],
		props.incorrectAnswers[25],
		props.incorrectAnswers[26]
	);
	questionsArray.push(
		props.correctAnswers[9],
		props.incorrectAnswers[27],
		props.incorrectAnswers[28],
		props.incorrectAnswers[29]
	);

	console.log(questionsArray);

	let correctAnswer = props.correctAnswers.map((correct) => {
		return <div>{correct}</div>;
	});

	return <div>{correctAnswer}</div>;
}

class RenderAnswers extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<RenderQuestionSelection
					correctAnswers={this.props.correctAnswers}
					incorrectAnswers={this.props.incorrectAnswers}
				/>
			</div>
		);
	}
}

export default RenderAnswers;
