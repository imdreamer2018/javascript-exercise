import countTypesNumber from './index';

test('统计所有类型的数量', () => {
  const types = {
    A: '3',
    B: '4',
    C: '5'
  };

  const result = countTypesNumber(types);
  expect(result).toBe(13);
});
