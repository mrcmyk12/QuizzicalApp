import React from "react";
import { Card } from "reactstrap";
import "./RenderQuestion.css";

const RenderQuestion = (props) => {
	console.log(props.questions);
	return (
		<div className="container" style={{ alignItems: "center" }}>
			<Card className="question-card">{props.question}</Card>
		</div>
	);
};

export default RenderQuestion;
