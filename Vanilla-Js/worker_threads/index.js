const { Worker } = require("worker_threads");

function chunkify(array, n) {
  let chunks = [];

  for (let i = n; i > 0; i--) {
    chunks.push(array.splice(0, Math.ceil(array.length / i)));
  }

  console.log(chunks);

  return chunks;
}

function run(arr, concurrentWorkers) {
  const chunks = chunkify(arr, concurrentWorkers);

  const tick = performance.now();
  let completedWorkers = 0;

  chunks.forEach((data, i) => {
    const worker = new Worker("./worker.js");
    worker.postMessage(data);
    worker.on("message", () => {
      console.log(`Worker ${i} completed!`);
      completedWorkers++;

      if (completedWorkers === concurrentWorkers) {
        console.log(
          `${concurrentWorkers} works took ${performance.now() - tick}`
        );
        process.exit();
      }
    });
  });
}

const jobs = Array.from({ length: 1000 }, () => 1e9);

run(jobs, 8);
