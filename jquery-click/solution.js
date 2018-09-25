const $ = selector => {
  const id = selector.slice(1, selector.length);
  const element = document.getElementById(id);
  return {
    click: cb => element.addEventListener("click", cb)
  };
};
