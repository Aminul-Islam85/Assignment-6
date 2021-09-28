const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const totalResult = document.getElementById('total-result')
    //console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const numFound = data.numFound;
            totalResult.innerText = numFound;
            displaySearchResult(data.docs)
        });
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(docs => {
        console.log(docs);


        const div = document.createElement('div');
        div.classList.add('col')
        const cover_i = docs.cover_i;
        console.log(cover_i);
        const authorName = docs.author_name[0];
        const bookTitle = docs.title;
        const publishYear = docs.first_publish_year;
        const publisher = docs.publisher.join(', ')


        div.innerHTML = `
        <div class="card h-100 m-50">
            <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img-top img-fluid w-50" alt="">
            <div class="card-body">
            <h5 class="card-text"> <u> Book title :</u> ${bookTitle}</h5>
                <p class="card-text"> <u> Author Name :</u> ${authorName}</p>
                <p class="card-text"> <u> First publish year :</u> ${publishYear}</p>
                <p class="card-text"> <u> Publishers :</u> ${publisher.slice(0, 200)}</p>
                
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}









