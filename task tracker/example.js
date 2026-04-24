function mergeInterval(arr){
    let results=[];
    arr.sort((a,b)=>a[0]-b[0])
    let cur=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i][0]<cur[1]){
            cur[1]=Math.max(arr[i][1],cur[1]);
        }
        else{
            results.push(cur);
            cur=arr[i];
        }
    }
    results.push(cur);
    return results;
}
function myPromiseAll(promises){
    let results=[];
    let count =0;
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            Promise.resolve(promises[i])
            .then((res)=>{
                count++
                results[i]=res;
                if(count===promises.length){
                    resolve(results);
                }
            })
            .catch(err=>{
                reject(err.message);
            });
        }
    })
}

function myFlatten(arr){
    let results=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            results.push(...myFlatten(arr[i]));
        }
        else{
            results.push(arr[i]);
        }
    }
    return results;
}

console.log(mergeInterval([[1,4],[2,5],[6,8],[7,9]]));
const p1=Promise.resolve(1);
const p2=fetch("https://jsonplaceholder.typicode.com/todos/1");
const p3=Promise.resolve(3);
//myPromiseAll([p1,p2,p3]).then(res=>res.forEach(r=>console.log(r))).catch(err=>console.log(err));

console.log(myFlatten([1,[2,3],[3,[4,5]],6]));