const userId = "54fs-/REex";
const store = {
  "54fs-/REex": ["ananas", "mango", "peach"]
};

const listSavedWords = () => {
  const userId = $.cookie("bubbler_userid");
  console.log("words", store[userId]);
};

const loginUser = () => {
  const cookie = $.cookie("bubbler_userid", userId);
  console.log("successful login", cookie);
};

const isUserLoggedIn = () => {
  const userId = $.cookie("bubbler_userid");
  return typeof userId != "undefined";
};

const logoutUser = () => {
  if (!isUserLoggedIn()) throw new Error("user is not logged in");
  $.removeCookie("bubbler_userid");
  console.log("successful logout");
};

const loginRequired = (view) => {
  return function() {
    if (!$.cookie("bubbler_userid")) loginUser();
    view();
  };
};

(() => {
  // If you run this code, currently it logs "undefined" in the console.
  //
  // Write a function `loginRequired()` that wraps its function argument. If
  // user was not logged in yet, it calls `loginUser()` first. Then calls its
  // function argument.
  //
  // As a result, it should log the items in the store.

  const listSavedWordsLoginRequired = loginRequired(listSavedWords);
  listSavedWordsLoginRequired();
  // listSavedWords();
  logoutUser();

})();
