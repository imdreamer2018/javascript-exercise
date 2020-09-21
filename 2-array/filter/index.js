function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(o => o % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
