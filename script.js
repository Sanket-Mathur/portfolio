let domainContent = " Machine Learning Egingineer, Flutter amdnd Front-End Web DEVeveloper";

var domain = document.getElementById('domain');
domain.innerHTML = '&nbsp;';

let index = 0;
let del = false, delCnt = 0;
setInterval(function() {
    if (index < domainContent.length) {
        if (del) {
            domain.innerHTML = domain.innerHTML.substring(0, domain.innerHTML.length - 1);
            delCnt++;

            if (delCnt == 2) {
                del = false;
                delCnt = 0;
                index++;
            }
        } else {
            domain.innerHTML += domainContent.charAt(index);

            if (index % 20 === 0) {
                del = true;
            } else {
                index++;
            }
        }
    }
}, 80);