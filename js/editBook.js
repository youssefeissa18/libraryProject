// waits for the HTML document to be loaded and parsed, function contains the rest of the script 
document.addEventListener('DOMContentLoaded', function() {
    //references to the buttons with ids
    const updateButton = document.getElementById("Update");
    const deleteButton = document.getElementById("Delete");
    const form = document.getElementById('editBook');


    updateButton.addEventListener('click', function() {
        try {
            updateBook();
            form.reset();
            console.log("Form reset after update");
        } catch (error) {
            console.error("Error updating book:", error);
        }
    });

    deleteButton.addEventListener('click', function() {
        try {
            deleteBook();
            form.reset();
            console.log("Form reset after delete");
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    });

    // update a book
    function updateBook() {
        // get values from form inputs 
        console.log("Update button clicked");
        const currentBookId = document.getElementById('currentBookId').value;
        const newBookId = document.getElementById('newBookId').value;
        const bookName = document.getElementById('bookName').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        if (!currentBookId) {
            alert("Please enter the current book ID.");
            return;
        }

        // ensures that the script has an array 
        let books = JSON.parse(localStorage.getItem("books") || "[]");  // get the array of books from local storage and parse the JSON string back into an array
        let bookFound = false;

        books.forEach(book => {
            if (book.id === currentBookId) {
                console.log("Found book to update:", book);
                book.id = newBookId || book.id;
                book.name = bookName || book.name;
                book.author = author || book.author;
                book.category = category || book.category;
                book.description = description || book.description;
                bookFound = true;
            }
        });

        if (bookFound) {
            console.log("Updated books:", books); // Log the updated array of books
            // modify books array back into a string and put in local storage
            localStorage.setItem("books", JSON.stringify(books));
            alert("Book details updated successfully.");
        }
        else {
            console.log("No book found with provided ID"); // Log when no matching book is found
            alert("No book found with the provided ID.");
        }
    }

    // delete a book
    function deleteBook() {
        console.log("Delete button clicked");
        // get values from inputs
        const currentBookId = document.getElementById('currentBookId').value;

        let books = JSON.parse(localStorage.getItem("books") || "[]");

        // store the number of books before making any changes
        const initialLength = books.length;

        // creates a new array that includes all books except the currentBookId. 
        // .filter method loop over the array and give a function to each item
        // if true add item to new array
        books = books.filter(book => book.id !== currentBookId);

        if (books.length !== initialLength) {
            localStorage.setItem("books", JSON.stringify(books));
            alert("Book deleted successfully.");
        } else {
            console.log("No book found to delete with ID:", currentBookId); // Log when no book to delete is found
            alert("No book found with the provided ID.");
        }
    }
});
