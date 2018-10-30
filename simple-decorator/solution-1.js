const loginUser = (state) => {
  state.userId = "54fs-/REex";
  console.log("successful login");
};

const listFavFruits = (state, db) => console.log("words:", db[state.userId]);

const isUserLoggedIn = (state) => state.userId != null;

const logoutUser = (state) => {
  if (!isUserLoggedIn(state)) throw new Error("User is not logged in!");
  state.userId = null;
  console.log("successful logout");
};

(() => {
  const state = { userId: null };
  const db = { "54fs-/REex": ["ananas", "mango", "peach"] };

  console.log("\n----- Returns undefined if user was not explicitly logged in -----");
  listFavFruits(state, db); // undefined
  console.log("\n----- Works because user was already logged in -----");
  loginUser(state);
  listFavFruits(state, db); // fruits
  logoutUser(state);

  // TODO Write a function `loginRequired()` that wraps its function argument.
  // If user was not logged in yet, it calls `loginUser()` first. Then it calls
  // its function argument.

  const loginRequired = (fn) => {
    return (state, ...args) => {
      if (!isUserLoggedIn(state)) loginUser(state);
      fn.call(null, state, ...args);
    };
  };

  if (typeof loginRequired === 'function') {
    console.log("\n----- Calling the function will log in the user first -----");
    const listFavFruitsLoginRequired = loginRequired(listFavFruits);
    listFavFruitsLoginRequired(state, db);
  }

})();
