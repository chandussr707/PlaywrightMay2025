class BankAccountNumber
{

   #demo = 300;
   #str = "I am new to JavaScript";
   $bool = true;
   constructor(demo)
   {
     //this.demo = demo;
     console.log(`I am in parameterized construtor ${demo}`)
   } 
//    constructor()
//    {
//     console.log("I am in default construtor")
//    }
   accountBalance(amount){
  
     if(amount>5000){
        console.log("Minimum amount is maintained")
     }
     else 
     {
        console.log("Minimum amount is not maintained")
     }

   }
   #getDemoValue(){
    console.log('Private Function')
}

getBalance()
{
    this.#getDemoValue();
    return this.#demo;
}


}

const acc = new BankAccountNumber("Demo1 value");
const acc1 = new BankAccountNumber("Demo2 Value");
acc.accountBalance(10000)
console.log(acc.getBalance());
