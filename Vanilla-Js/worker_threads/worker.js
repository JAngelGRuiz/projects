const { parentPort } = require("worker_threads");

parentPort.on("message", (jobs) => {
  for (let job in jobs) {
    let count = 0;
    for (let i = 0; i < job; i++) {
      count++;
    }
  }

  parentPort.postMessage("done");
});
