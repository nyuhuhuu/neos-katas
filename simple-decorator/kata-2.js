function work(failed = false) {
  console.log("Trying to connect...");
  if (failed) throw new Error("Couldn't connect to future");
  console.log("Connected!");
};

// TODO provide function `logErrors()` that catches potential errors thrown
// while executing the function. If there was an error, it calls the logger
// function with the error as argument.

work(); // Connected!
work(true); // Error!
// work = logErrors(work, console.log);
// work(); // Connected!
// work(true); // Error handled
