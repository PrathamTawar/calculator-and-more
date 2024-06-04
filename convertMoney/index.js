let InUSd = document.getElementById('moni')
let btn = document.getElementById('btn');
let ToINR = document.getElementById('toinr');
let currentrate = 83.30
btn.addEventListener('click', () =>{

    let usd = InUSd.value;
    if(usd <= 0 || isNaN(usd))
        {
            alert('Please enter a valid ammount in USD')
            ToINR.innerText = 'Converted ammount'
            ToINR.classList.replace('colorwhite', 'colorgray');
        }
    else
        {
            let ans = eval(usd * currentrate)
            ToINR.innerText = ans.toFixed(2);
            ToINR.classList.replace('colorgray', 'colorwhite');
        }
}
)