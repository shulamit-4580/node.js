const {getBook,printBook,Book}=require('./books');
const {getUser,printUser,User}=require('./users');
const book=(getBook(1))
const user=(getUser('965472'))
if(book.type!=user.type && book.borrow==='no' && user.borrow==='no')
{
    user.borrow='yes'
    book.borrow='yes'
    console.log("the book borrowed")
}
else{
    console.log("you can't borrow book")
}

