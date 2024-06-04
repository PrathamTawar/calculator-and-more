let historytext = document.getElementById('history');
let answertext = document.getElementById('answer');
let btns = document.getElementsByTagName('button');
let nav = document.getElementsByTagName('nav');

for(let i of btns) 
    {
       i.addEventListener('click', () =>
        {
            let repeat = 0;
            let btntext = i.innerText
            

            if(btntext == '=')
                {
                    let ans = eval(answertext.innerText);
                    historytext.innerText = answertext.innerText;
                    answertext.innerText = ans;
                }
            
            else if(btntext == 'CE')
                {
                    answertext.innerText = answertext.innerText.slice(0, -1);
                }
                
            else if(btntext == 'C')
                {
                    answertext.innerText = "";
                    historytext.innerText = "";
                }
            
            else if(btntext == 'x')
                {
                    answertext.innerText += '*';
                }

            else if(btntext == 'x2')
                {
                    historytext.innerText = answertext.innerText + 'x' + answertext.innerText;
                    answertext.innerText = eval(answertext.innerText*answertext.innerText);
                }
            else
                {
                    answertext.innerText += btntext;
                }
        })
    }

document.addEventListener('scroll', () => {nav[0].classList.replace('notvisible', 'visible')
    console.log('hi');
});
