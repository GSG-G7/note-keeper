module.exports = (() => {
  let id = 0;
  // eslint-disable-next-line no-plusplus
  return () => ++id;
})();
