import React from 'react';
import QuestionAnswerDuo from './QuestionAnswerDuo';

class HistoryQuestions extends React.Component{
    state={

    }

    render(){
        console.log(this.props)
        return(
            <div>
				<QuestionAnswerDuo
					questions={this.props.historyQuestions}
					incorrectAnswers={this.props.historyIncorrectAnswers}
					correctAnswers={this.props.historyCorrectAnswers}
				/>
			</div>
        )
    }
}

export default HistoryQuestions;