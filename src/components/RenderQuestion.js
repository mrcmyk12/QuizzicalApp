import React from "react";
import { Card } from "reactstrap";
import "./RenderQuestion.css";

const RenderQuestion = (props) => {
	console.log(props.questions);
	return (
		<div className="container" style={{ textAlign:"center" }}>
			{props.question}
		</div>
	);
};

export default RenderQuestion;
