let userDOB = document.getElementById("dob");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

let date = new Date;
let CurrentYear = date.getFullYear();
let CurrentMonth = date.getMonth() + 1;
let CurrentDay = date.getDate();

function display(age)
{
    result.classList.replace("colorgray", "colorwhite");
    result.innerText = "Your Age: " + age;
}

btn.addEventListener("click", () => {

        let useryear = userDOB.value.slice(0, 4);
        let usermonth = userDOB.value.slice(5, 7);
        let userday = userDOB.value.slice(8, 10);
        let age = eval(CurrentYear - useryear)

        if (useryear >= CurrentYear || useryear < 1900 || useryear == '') 
            {
                alert("Please enter a valid date");
            }
        else if (usermonth > CurrentMonth || (usermonth == CurrentMonth && userday > CurrentDay))
            {
                display(age-1);
            }
        else
            {
                display(age)
            }
}
);
