class User{
    id;
    name;
    type;
    borrowed;
    constructor(id,name,type,borrowed)
    {
        this.id=id;
        this.name=name;
        this.type=type;
        this.borrowed=borrowed;
    }
    toString(){
        return `id:${this.id},name:${this.name},type:${this.type},borrowed:${this.borrowed}`;
    }
}
let arr=[new User('325315','sari','drama','no'),
    new User('156976','ruth','emotion','yes'),
    new User('965472','dina','drama','no')
]
function print(...arr){
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i].toString());
    }
}
function getUser(kod)
{
    try {
        const users = arr.filter(x => x.id == kod);
        if (users.length === 0) {
            throw new Error("not found");
        }
        return users;
    } 
    catch (error) {
        console.log(error.message);  // זורק את השגיאה שנמצאה
    }
}
/*print(arr);
print(getUser('325315'));
print(getUser(5));*/
module.exports = {getUser,printUser:print,User};
