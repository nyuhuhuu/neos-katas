function work(failed = false) {
  console.log("Trying to connect...");
  if (failed) throw new Error("Couldn't connect to future");
  console.log("Connected!");
};

function logErrors(f, logFn) {
  return (...args) => {
    try {
      f.apply(this, args);
    } catch (err) {
      logFn(err);
    }
  };
}

// work(); // Connected!
// work(true); // Error!
work = logErrors(work, console.log);
work(); // Connected!
work(true); // Error handled
