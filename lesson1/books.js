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
let arr=[new Book('dina dey','children','no'),new Book('blue blood','drama','no'),
    new Book('what is true true','emotion','yes')]
function print(...arr){
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i].toString());
    }
}
function getBook(kod)
{
    try {
        const books = arr.filter(x => x.id == kod);
        if (books.length === 0) {
            throw new Error("not found");
        }
        return books;
    } 
    catch (error) {
        console.log(error.message); // זורק את השגיאה שנמצאה
    }
}
/*print(arr);
print(getBook(2));
print(getBook(5));*/
module.exports = {getBook,printBook:print,Book};
