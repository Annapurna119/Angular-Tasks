class organization{
    protected empNo:number;
    public empName:string;
    private profit:number=10000;

    constructor(no:number,name:string){
     this.empNo=no;
     this.empName=name;
     console.log(this.empName);
     console.log(this.empNo);
    }
    test(){
 console.log(this.profit)
    }    
}
class sales extends organization{
    public disp(){    
    console.log("display method");
    }
    public revenue(){       
     console.log("revenue method")
    }
}
let sale=new sales(123,"john")
sale.revenue();
sale.disp();
sale.test();