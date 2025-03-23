let header_title = document
function filterMovies(genre) {
    const topPicksSection = document.getElementByld('top-picks');
    let filteredMovies;

    if(genre == 'Comedy') {
        filteredMovies = ['The Hangover (2009)', 'Superbad (2007)', '21 Jump Street (2007)'];
    }
    else if(genre == 'Romance') {
        filteredMovies = ['The Notebook (2004)', 'La La Land (2016)', 'Titanic (1997)'];
    }
    else if(genre == 'Horror') {
        filteredMovies = ['The Conjuring (2013)', 'A Quiet Place (2018)', 'IT (2017)'];

    const movieList = filteredMovies.map(movie => `<li><a href="#">${movie}</a></li>`).join('');
    topPicksSection.innerHTML = `<h3>Top picks for you: (${genre})</h3><ul>${movieList}</ul>`; 
    }
}
function displayTopPicks() {
    const topPicksSection = document.getElementByld('top-picks');

    const movies = [
        { title: 'Wicked(2024)', image: 'image.png'},
        {title: 'Interstellar(2014)', image:'image 1.png'},
        {title: 'Little Women(2015)', image:'image 2.png'}
    ];
}
