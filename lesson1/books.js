const fs = require('fs')
const path = './books.json'
class Book{
    id;
    name;
    type;
    borrowed;
    static counter=0;
    constructor(name,type,borrowed)
    {
        this.id=Book.counter++;
        this.name=name;
        this.type=type;
        this.borrowed=borrowed;
    }
    toString(){
        return `id:${this.id},name:${this.name},type:${this.type},borrowed:${this.borrowed}`;
    }
}
let arr=[
    new Book('dina dey','children','no'),
    new Book('blue blood','drama','no'),
    new Book('what is true true','emotion','yes')]

function initBooks(){
        try{
            const data = JSON.stringify(arr,null,2)
            fs.writeFileSync(path,data,'utf8')
            console.log("books data success!")
        } catch (err){
            console.log("books data error!")
        }
}
    
function readBooks(){
        try{
            const data = fs.readFileSync(path,'utf8')
            return JSON.parse(data)
        } catch(err){
            console.log("error reading books file:",err)
            return []
        }
}
function print(){
    const books = readBooks()
    for (const b of books)
        console.log(JSON.stringify(b, null, 2)) 
}
function getBook(c)
{
    const books = readBooks()
    for (const b of books) {
        if (b.code == c)
            return b
    }
    throw new Error(`book with code ${c} not found! `)
}
/*print(arr);
print(getBook(2));
print(getBook(5));*/
module.exports = {getBook,printBook:print,Book,initBooks};
