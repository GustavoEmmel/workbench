const memoryLeak = async () => {
  // Simulates a memory leak by creating a growing array that is never cleared.
  let leakyArray = [];

  function createLeak() {
    const largeObject = new Array(1000000).fill("leak");
    leakyArray.push(largeObject); // This array grows indefinitely.
    console.log(`Leaky array size: ${leakyArray.length}`);
  }

  // Run createLeak every second
  setInterval(createLeak, 1000);

  // Observing memory usage
  setInterval(() => {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`Memory usage: ${Math.round(used * 100) / 100} MB`);
  }, 2000);
};

const memorySave = async () => {
  let managedArray = [];

  function createAndManageData() {
    const largeObject = new Array(1000000).fill("data");

    // Add the large object to the array
    managedArray.push(largeObject);

    // Limit the size of the array to prevent uncontrolled growth
    if (managedArray.length > 10) {
      managedArray.shift(); // Remove the oldest entry to free up memory
    }

    console.log(`Managed array size: ${managedArray.length}`);
  }

  // Run createAndManageData every second
  setInterval(createAndManageData, 1000);

  // Observing memory usage
  setInterval(() => {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`Memory usage: ${Math.round(used * 100) / 100} MB`);
  }, 2000);
};

memorySave();
