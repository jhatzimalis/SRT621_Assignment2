const Book = require("../models/book");

module.exports = {
    index: (req, res) => {
        Book.find({})
            .then(books => {
                res.render("home", { books: books })
        })
        .catch(error => {
            console.log(`Error fetching books: ${error.message}`)
            res.redirect("/home");
        });
    },

    new: (req, res) => {
        res.render("AddNewBook");
    },

    create: (req, res, next) => {
        let bookParams = {
            bookName: req.body.bookName,
            authorName: req.body.authorName,
            purchaseLink: req.body.purchaseLink
        };

        Book.create(bookParams)
            .then(books => {
                res.locals.redirect = "/home";
                res.locals.books = books;
                next(); 
            })
            .catch(error => {
                console.log(`Error adding defined book: ${error.message}`);
                next(error);
            });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },

    show: (req, res, next) => {
        let bookId = req.params.id;
        Book.findById(bookId)
            .then(books => {
                res.render("books", { books: books })            
            })
            .catch(error => {
                console.log(`error fetching book by ID: ${error.message}`);
                res.redirect ("/home");
            });
    },

    deleteBook: (req, res) => {
        Book.find({})
            .then(books => {
                res.render("DeleteABook", { books: books });
            })
            .catch(error => {
                console.log(`Error fetch books: ${error.message}`)
                res.redirect("/home");
            });
    },

    delete: (req, res, next) => {
        let bookId = req.params.id;
        Book.findByIdAndDelete({ _id:bookId })
            .then(() => {
                res.locals.redirect = "/home";
                next();
            })
            .catch(error => {
                console.log(`Error deleting book by ID: ${error.message}`);
                next();
            });
    },

    sendReqCss: (req, res) => {
        res.sendFile(`./public/css/style.css`, {root: "./"})
    }
};