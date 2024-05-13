function addBook() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    console.log("Form Inputs:", { id, name, author, category, description });

    if (!id || !name || !author || !category || !description) {
        console.log("Validation Failed: Missing Fields");
        alert('Please fill in all fields.');
        return;
    }

    let books = JSON.parse(localStorage.getItem("books") || "[]");
    const exists = books.some(book => book.id === id);

    if (exists) {
        console.log("Operation Failed: Duplicate ID");
        alert('A book with this ID already exists.');
        return;
    }

    books.push({ id, name, author, category, description });
    console.log("New book added:", { id, name, author, category, description }); // Log new book details

    localStorage.setItem("books", JSON.stringify(books));
    alert('New book added successfully.');

    console.log("Updated Books Array:", books); // Log the updated array of books

    // reset the form
    document.getElementById('addBook').reset();
}
