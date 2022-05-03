
function firstQuestions(){
    let answer1 = document.getElementById('answer1')
    let toggle = true
    let question = document.getElementById('first');
    let arrow1 = document.getElementById('arrow1');

    question.addEventListener('click', () => {
        if(toggle){
            toggle = false;
            answer1.style.display = 'inline'
            arrow1.style.transform = 'rotateX(180deg)'
            arrow1.style.transitionDuration = '500ms'
        }else{
            toggle = true;
            answer1.style.display = 'none'
            arrow1.style.transform = 'rotateX(0deg)'
            question.style.color ='hsl(240, 6%, 50%)'
        }
        
    })
    answer1.innerHTML = `<p>You can invite up to 2 additional users on the Free plan. There is no limit on 
    team members for the Premium plan.</p>`
}

firstQuestions();

function secondQuestion(){
    let answer2 = document.getElementById('answer2')
    let toggle = true
    let question = document.getElementById('second');
    let arrow2 = document.getElementById('arrow2');

    question.addEventListener('click', () => {
        if(toggle){
            toggle = false;
            answer2.style.display = 'inline'
            arrow2.style.transform = 'rotateX(180deg)'
            arrow2.style.transitionDuration = '500ms'
        }else{
            toggle = true;
            answer2.style.display = 'none'
            arrow2.style.transform = 'rotateX(0deg)'
        }
        
    })
    answer2.innerHTML = `<p>No more than 2GB. All files in your account must fit your allotted storage space.</p>`
}

secondQuestion();

function thirdQuestion(){
    let answer3 = document.getElementById('answer3')
    let toggle = true
    let question = document.getElementById('third');
    let arrow3 = document.getElementById('arrow3');

    question.addEventListener('click', () => {
        if(toggle){
            toggle = false;
            answer3.style.display = 'inline'
            arrow3.style.transform = 'rotateX(180deg)'
            arrow3.style.transitionDuration = '500ms'
        }else{
            toggle = true;
            answer3.style.display = 'none'
            arrow3.style.transform = 'rotateX(0deg)'
        }
        
    })
    answer3.innerHTML = `<p>Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.</p>`
}

thirdQuestion();

function forQuestion(){
    let answer4 = document.getElementById('answer4')
    let toggle = true
    let question = document.getElementById('for');
    let arrow4 = document.getElementById('arrow4');

    question.addEventListener('click', () => {
        if(toggle){
            toggle = false;
            answer4.style.display = 'inline'
            arrow4.style.transform = 'rotateX(180deg)'
            arrow4.style.transitionDuration = '500ms'
        }else{
            toggle = true;
            answer4.style.display = 'none'
            arrow4.style.transform = 'rotateX(180deg)'
        }
        
    })
    answer4.innerHTML = `<p>Yes! Send us a message and we’ll process your request no questions asked.</p>`
}

forQuestion();

function fiveQuestion(){
    let answer5 = document.getElementById('answer5')
    let toggle = true
    let question = document.getElementById('five');
    let arrow5 = document.getElementById('arrow5');

    question.addEventListener('click', () => {
        if(toggle){
            toggle = false;
            answer5.style.display = 'inline'
            arrow5.style.transform = 'rotateX(180deg)'
            arrow5.style.transitionDuration = '500ms'
        }else{
            toggle = true;
            answer5.style.display = 'none'
            arrow5.style.transform = 'rotateX(180deg)'
        }
        
    })
    answer5.innerHTML = `<p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>`
}

fiveQuestion();