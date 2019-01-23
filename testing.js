


var deep_thought = {
    the_answer: 42,
    ask_question: function () {
        return this.the_answer;
    }
};
var the_meaning = deep_thought.ask_question();
console.log(the_meaning);

function BigComputer(answer) {
    this.the_answer = answer;
    this.ask_question = function () {
        return this.the_answer;
    }
}
var deep_thought = new BigComputer(42);
var the_meaning = deep_thought.ask_question();
// console.log(deep_thought);
console.log(the_meaning);

function test_this() {
    return this;
    }
    var i_wonder_what_this_is = test_this();

    console.log(i_wonder_what_this_is)