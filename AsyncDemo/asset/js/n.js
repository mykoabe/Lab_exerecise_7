// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   // resolve runs the first function in .then
//   promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );
function resolveAfter2(){
   return new Promise((resolve, reject)=>{
        setTimeout(() => resolve("done"), 2000);
    })
}
async function waitmore(){
    console.log("pending")
    let result = await resolveAfter2()
    console.log(result)
}
waitmore()







