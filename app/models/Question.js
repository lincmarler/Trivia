


export class Question {
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correct = correct_answer
        this.incorrect = incorrect_answers
    }

    get QuestionCard() {
        return `  <section class="col-6 card">
    <div >
      <h1 class="text-center">
        <i class=" mdi mdi-cash-100"></i>
      </h1>
      <h4 class="text-center text-bold">${this.category}</h4>
      <h5 class="text-center">${this.question}</h5>
      <div class="row text-center">
        <button class=" btn col-5">${this.correct}</button>
        <button class=" btn col-5">${this.incorrect[0]}</button>
        <button class=" btn col-5">${this.incorrect[1]}</button>
        <button class=" btn col-5">${this.incorrect[2]}</button>
      </div>
    </div>
  </section>`
    }

}