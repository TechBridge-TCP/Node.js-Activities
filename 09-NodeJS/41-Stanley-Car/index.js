const util = require("util")

let totalGas = 100;

function startCarPromise (gas) {
    return new Promise ((resolve, reject) => {
       startCar(gas,(error, data) => {
           if (error) reject(error);

           resolve(data);
       });
    });
}

//ES5 function with invoking callback..
function startCar(gas,cb) {
    if (gas) {
        totalGas -= gas;
        console.log("My car started today..");
        cb(null,totalGas);
    } else {
        cb("Gas is required",null)
    }
    
}

//ES6 Convert Old function with callback > a Promise
const goFastPromise = util.promisify(goFast);

function goFast(speed,gas,cb) {
    if (speed && gas) {
        const remainingGas = totalGas - gas;
        totalGas = remainingGas;
        console.log("Car is moving fast now..");
        cb(null,{
            speed: speed,
            remainingGas: remainingGas
        }); 
    } else 
    {
      cb("Speed / Gas is required..",null);
    }
}

//ES5 Old way.. Async Hell
function startCarCallBack(err, data) {
    console.log("Car is ready")
    console.log(data);
    goFast(50,function (hasTicket) {
        console.log('I got a ticket' + hasTicket);
        arriveToWork()
    });    
}

//ES6 Async / Await
async function runner () {
    try {
        const carStartedData = await startCarPromise(50);
        if (carStartedData) console.log(`Car started Succesfull: ${carStartedData}`);
        const goFastData = await goFastPromise(80,20);
        console.log(goFastData);
        console.log(goFastData.remainingGas > 0 ? "You get to work" : "I ran out of gas.. :(");     
    
    } catch (err){
        console.log(err)
    }
} 

runner();