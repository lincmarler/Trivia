import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionsService {
    async getQuestions() {
        const reponse = await fetch('https://opentdb.com/api.php?amount=10&category=23&type=multiple')
        const data = await reponse.json()
        let newQuestions = data.results.map(question => new Question(question))
        AppState.questions = newQuestions
    }
}


export const questionService = new QuestionsService()