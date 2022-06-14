const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', event => {
        event.preventDefault();
        const inputValue = document.getElementById('searchByID').value;
        console.log(inputValue);
        fetch(`http://localhost:3000/movies/${inputValue}`)
        .then(res=> res.json())
        .then(function(movies){
            //console.log(movies)
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');
            //console.log(title)
            title.innerText = movies.title;
            summary.innerText = movies.summary;
        })
    })
}

document.addEventListener('DOMContentLoaded', init);

