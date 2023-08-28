import { AppState } from "../AppState.js";
import { questionService } from "../services/QuestionsService.js";
import { setHTML } from "../utils/Writer.js";



function _drawQuestionCards() {
    console.log('drawing')
    let questions = AppState.questions
    let content = ''
    questions.forEach(q => content += q.QuestionCard)
    setHTML('questions', content)
}

export class QuestionsController {
    constructor() {
        this.getQuestions()
        AppState.on('questions', _drawQuestionCards)
    }

    async getQuestions() {
        await questionService.getQuestions()
    }
}