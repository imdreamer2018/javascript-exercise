import _ from 'lodash';

export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return _.filter(collection, o => {
    return o.match('粤A');
  }).length;
}
