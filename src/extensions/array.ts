export { };

declare global {
  interface Array<T> {
    skipLater(predict: (v: T) => boolean): Array<T>;
    enumerate(): Array<[number, T]>;
  }
}

Array.prototype.enumerate = function() {
  return this.map((value, index) => [index, value]);
};

Array.prototype.skipLater = function(predict) {
  let skip = false;
  return this.filter((value) => {
    if (skip) {
      return false;
    }
    if (predict(value)) {
      skip = true;
      return false;
    }
    return true;
  });
};
