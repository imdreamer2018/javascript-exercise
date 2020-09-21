export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(o => {
    return o.age <= 20 && o.age >= 10;
  }).name;
}
