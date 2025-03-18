
const {getBook,printBook,Book,initBooks}=require('./books');
const {getUser,printUser,User,initUsers}=require('./users');
//const book=(getBook(1))
//const user=(getUser('965472'))
//initUsers()
//initBooks()
printBook()
printUser()
const book=getBook(process.argv[2]);
const user=getUser(process.argv[3]);
if(book.type!=user.type && book.borrow==='no' && user.borrow==='no')
{
    user.borrow='yes'
    book.borrow='yes'
    console.log("the book borrowed")
}
else{
    console.log("you can't borrow book")
}

