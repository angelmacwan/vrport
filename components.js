function init(){
    fetch('./navbar.html')
    .then(res => res.text())
    .then((data) => {        
        document.querySelector('#comp_navbar').innerHTML = data;
    })




    fetch('./footer.html')
    .then(res => res.text())
    .then((data) => {        
        document.querySelector('#comp_footer').innerHTML = data;
    })
}