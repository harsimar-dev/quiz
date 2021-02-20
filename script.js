const quizData = [


{
   question : "Which one of these is not one of the Millenium Prize Problems in mathematics worth 1 million$",

   a: "P Vs NP",
   b:"Yang-Mills and Mass Gap",
   c:"Navier-Strokes equation",
   d:"Goldbach's Conjecture",
   correct:"d",
},
{
   question : "Which of these Physics concepts seem to imply a direction of time which otherwise is not implied by any other theory ",

   a: "Entropy",
   b:"Inertia",
   c:"Potential Energy",
   d:"Special principle of relativity",

   correct:"a",
},
{
   question : "Which one of these seems to imply that the Universe is in essence 2D rather than 3d",

   a: "Pauli's Exclusion Principle",
   b:"General theory of Relativity",
   c:"Hawking Radiation",
   d:"Holographic Principle",

   correct:"d",
},
{
   question : "how many dimensions does the current version of string theory require",

   a: "16",
   b:"7",
   c:"10",
   d:"4",

   correct:"c",
},

{
   question : "Which one of these is a lossy data compression method",

   a: "entropy coding",
   b:"chaine codes",
   c:"discrete cosine transform",
   d:"area image compression",

   correct:"c",
},

{
   question : "which part of human brain is associated with fear",

   a: "cerebellum",
   b:"amygdala",
   c:"cerbrum",
   d:"medulla oblongata",

   correct:"b",
},

{
   question : "Who predicted the existence of anti-matter",

   a: "Paul Dirac",
   b:"Einstein",
   c:"Stephen Hawking",
   d:"Werner Heisenberg",

   correct:"a",
},

{
   question : "Which of these types is associated with IGF growth factors in humans which plays a part in cancer/aging",

   a: "lipids",
   b:"proteins",
   c:"vitamins",
   d:"carbohydrates",

   correct:"b",
},

{
   question : "which of these inventions is not a consequence of nasa space missions",

   a: "smartphone camera",
   b:"water purifier",
   c:"cochlear implant",
   d:"radar",

   correct:"d",

},

{
   question : "Which of these elementary particles can pass throught the human body",

   a: "electrons",
   b:"photons",
   c:"bosons ",
   d:"neutrinos",

   correct:"d",
}





]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
	const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();




function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            	answer = answerEL.id;
            }

      });

      return answer;

	}

function deselectAnswers () {
	answerEls.forEach(answerEL=> {
            answerEL.checked = false;

      });
}






submit.addEventListener("click", ()=>{

  const answer = getSelected();

   if(answer){
         if(answer === quizData[currentQuiz].correct){

         	score++;
         }

         currentQuiz++;

         if(currentQuiz < quizData.length){
         	loadQuiz();
          deselectAnswers();
         }
         else{
         	quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }














});
