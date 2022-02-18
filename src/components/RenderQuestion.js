import React from "react";

const RenderQuestion = (props) => {
    console.log(props.questions)

    return(
        <div>
            {props.questions.map((quest)=>{
                return(
                    <div>{quest}</div>
                )
            })}
        </div>
    )
};

export default RenderQuestion;
