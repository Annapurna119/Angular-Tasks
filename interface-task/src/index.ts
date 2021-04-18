interface Music{
    movie:string;
    year?:number;
    isnew?:boolean;
    getSalary: (payment) => number;
}
interface Songs extends Music{
    bandname:string;
}
class MyClass implements Music,Songs{
    movie:string;
    getSalary:(payment) => number;
    bandname:string      
} 
let MyCls=new MyClass()
MyCls.bandname="Thaman";
MyCls.movie="vakeelsab";
console.log(MyCls.movie);
console.log(MyCls.bandname);