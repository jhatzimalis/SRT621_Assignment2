const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    authorName: {
        type: String,
        required: true
    },
    purchaseLink: {
        type: String,
        required: true,
        unique: true
    }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

Book.create(
    {
        bookName: "The Hunger Games",
        authorName: "Suzanne Collins",
        purchaseLink: "https://www.amazon.ca/Hunger-Games-Suzanne-Collins/dp/0439023521/ref=sr_1_2?crid=1D35B2T3IEVNU&keywords=hunger+games+book&qid=1649897500&sprefix=hunger+games+book%2Caps%2C88&sr=8-2"
    },
    {
        bookName: "Catching Fire",
        authorName: "Suzanne Collins",
        purchaseLink: "https://www.amazon.ca/Catching-Fire-Second-Hunger-Games/dp/0545586178/ref=pd_bxgy_img_sccl_1/131-1651446-3123217?pd_rd_w=JMLza&pf_rd_p=19eafb8a-881a-44bb-9725-85a79b8c53d4&pf_rd_r=FHQG3FBPTWT5CT4WEQWX&pd_rd_r=f6d41d55-8ab9-4ad2-9783-cf2ab77320c0&pd_rd_wg=Ybw1S&pd_rd_i=0545586178&psc=1"
    },
    {
        bookName: "Mockingjay",
        authorName: "Suzanne Collins",
        purchaseLink: "https://www.amazon.ca/Mockingjay-Hunger-MOCKINGJAY-HUNGER-Paperback/dp/B00QPH1ZWO/ref=sr_1_2?crid=3BVNREWS602DJ&keywords=mockingjay+book&qid=1649897652&s=books&sprefix=mockingjay+book%2Cstripbooks%2C73&sr=1-2"
    },
    function (error, savedDocument) {
        if (error) console.log("Record already exists in database");
    }
);