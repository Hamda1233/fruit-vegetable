const btn_gaguud = document.getElementById('gaduud')
const btn_balug = document.getElementById('balug')
const btn_cagaar = document.getElementById('cagaar')

// button gaduud
btn_gaguud.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
    txt.innerHTML = 'page is red';
    txt.style.color = 'white';
})

// button balug
btn_balug.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
    txt.innerHTML = 'page is blue';
    txt.style.color = 'white';
})

// button cagaar
btn_cagaar.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
    txt.innerHTML = 'page is green';
    txt.style.color = 'white';
})