//sequential 
async function sequential(tasks) {
    let results = [];
    for(let t of tasks){
        results.push(await t());
    }
    return results;
}

const tasks = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve(2), 5000)),
  () => new Promise(resolve => setTimeout(() => resolve(3), 1000))
]
sequential(tasks).then(results => {
    console.log(results);
})

//promise poll

async function promisePool(tasks,limit){
    let i=0;
    let results=[];
    async function worker(){
        while(i<tasks.length){
            let cur=i++;
            results[cur]=await tasks[cur]();
        }
    }
    let workers=Array(limit).fill(0).map(()=>worker());
    await Promise.all(workers);
    return results;
}
//console.log(promisePool(tasks,2));
promisePool(tasks,2).then(results => {
    console.log(results);
})  

//promise Queue
class Queue{
    constructor(){
        this.queue=Promise.resolve();
    }
    add(task){
        this.queue=this.queue.then(()=>task());
        return this.queue;
    }
}
let queue=new Queue();
tasks.forEach(task=>{
    queue.add(task).then(result=>{
        console.log(result);                
    })
})

//concurrency limiter

async function withConcurrency(tasks, limit) {
  const results = []
  const executing = []

  for (const task of tasks) {
    const p = Promise.resolve().then(() => task())
    results.push(p)

    if (limit <= tasks.length) {
      const e = p.then(() =>
        executing.splice(executing.indexOf(e), 1)
      )
      executing.push(e)

      if (executing.length >= limit) {
        await Promise.race(executing)
      }
    }
  }

  return Promise.all(results)
}

//retry promise
async function retry(fn, retries) {
  try {
    return await fn()
  } catch (err) {
    if (retries === 0) throw err
    return retry(fn, retries - 1)
  }
}

const tasks2 = [
  () => new Promise((resolve, reject) => setTimeout(() => reject(1), 1000)),
  () => new Promise((resolve, reject) => setTimeout(() => reject(2), 5000)),
  () => new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]
let i=0;

retry(()=>tasks[i++](),1).then(res=>console.log(res)).catch(err=>console.log(err));
//run in batches

async function batch(tasks, size) {
  const results = []

  for (let i = 0; i < tasks.length; i += size) {
    const chunk = tasks.slice(i, i + size)
    results.push(...await Promise.all(chunk.map(t => t())))
  }

  return results
}


//queue with concurrency limit
async function queueWithLimit(tasks, limit) {
  const results = []
  const queue = tasks.map((task, i) => ({ task, i }))

  async function worker() {
    while (queue.length) {
      const { task, i } = queue.shift()
      results[i] = await task()
    }
  }

  await Promise.all(Array.from({ length: limit }, worker))
  return results
}

//normal queue
async function queue(tasks) {
  const results = []

  for (let i = 0; i < tasks.length; i++) {
    results[i] = await tasks[i]()
  }

  return results
}

class PromiseQueue {
    constructor(tasks, limit) {
        this.queue=[];
        this.limit=limit;
        this.results=[];
        
    }
    add(task){
        this.queue.push(task);
    }
    // async run(){
    //     let i=0;
    //     async function worker(){
    //     while(i<this.queue.length){
    //         let cur=i++;
    //         this.results[cur]=await this.queue.shift()();
    //     }}
    //     let workers=Array(this.limit).fill(0).map(()=>worker());
    //     await Promise.all(workers);
    //     return this.results;
    // }
    run(){
        for(let i=0;i<this.queue.length;i+=this.limit){
            let chunk=this.queue.slice(i,i+this.limit);
            Promise.all(chunk.map(t=>t())).then(res=>{
                this.results.push(...res);
            });
        }
    }
}
