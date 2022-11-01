const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener ('submit', e => {
    e.preventDefault(); //avoid changes to default if page is refreshed

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score+=25;
        } 
        else {
            const currentSelectedInput =  form[`q${index + 1}`][answer === form[`q${index + 1}`][0] ? 0 : 1];
            currentSelectedInput.parentNode.classList.add('wrong-answer');
            }
        
     
    });

    //show result on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else {
            output++;
        }
    }, 10);

});



