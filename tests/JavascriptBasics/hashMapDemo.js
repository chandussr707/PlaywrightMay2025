
const demoMap = new Map();

demoMap.set("Name", "Raj");

demoMap.set("Salary", 25000);

demoMap.set("Dept", "IT");

console.log(demoMap.size)

console.log(demoMap.get("Dept"));

for(let [key,value] of demoMap ){
 
    console.log(`Key- ${key} ==> Value ==> ${value}`)
}

const hashTableDemo = {};
hashTableDemo['username'] = 'secret-sauce';
hashTableDemo['password'] = 'Nations@123';
console.log(hashTableDemo['password']);