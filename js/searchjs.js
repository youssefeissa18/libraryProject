// const data = [
//     { name: "Book1", badge: "Available", image: "imgs/Empty.jpeg", link: "" },
//     { name: "Book2", badge: "Unavailable", image: "imgs/Empty.jpeg", link: "" },
// ];

// const searchInput = document.getElementById('search-input');
// const searchResults = document.getElementById('search-results');

// searchInput.addEventListener('input', function() {
//     const searchTerm = this.value.toLowerCase();
//     const filteredResults = data.filter(item => item.name.toLowerCase().includes(searchTerm));
//     displayResults(filteredResults);
// });

// document.addEventListener('click', function(event) {
//     if (event.target !== searchInput && event.target !== searchResults) {
//         searchResults.style.display = 'none';
//     }
// });

// function displayResults(results) {
//     if (results.length > 0) {
//         searchResults.innerHTML = '';
//         results.forEach(result => {
//             const resultElement = document.createElement('div');
//             resultElement.classList.add('result');
//             resultElement.innerHTML = `
//                 <img src="${result.image}" alt="${result.name}">
//                 <p>${result.name}</p>
//                 <p class="status ${result.badge.toLowerCase()}">${result.badge}</p>
//             `;
//             resultElement.addEventListener('click', function() {
//                 window.location.href = result.link;
//             });
//             searchResults.appendChild(resultElement);
//         });
//         searchResults.style.display = 'block';
//     } else {
//         searchResults.style.display = 'none';
//     }
// }
const data = [
    { name: "Book1", badge: "Available", image: "imgs/Empty.jpeg", link: "" },
    { name: "Book2", badge: "Unavailable", image: "imgs/Empty.jpeg", link: "" },
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');


searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredResults = data.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayResults(filteredResults);
});


document.addEventListener('click', function(event) {
    if (event.target !== searchInput && event.target !== searchResults) {
        searchResults.style.display = 'none';
    }
});

function displayResults(results) {
    if (results.length > 0) {
        searchResults.innerHTML = '';
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result');
            resultElement.innerHTML = `
                <img src="${result.image}" alt="${result.name}">
                <div class="result">
                    <p class="book-title">${result.name}</p>
                    <p class="status ${result.badge.toLowerCase()}">${result.badge}</p>
                </div>
            `;
            resultElement.addEventListener('click', function() {
                window.location.href = result.link;
            });
            searchResults.appendChild(resultElement);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}
