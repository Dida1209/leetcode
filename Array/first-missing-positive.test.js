const first_missing_positive = require('./first-missing-positive.js');
// import {first_missing_positive} from './first-missing-positive.test';

test('0045 跳跃游戏 II first_missing_positive test01', () => {
    expect(first_missing_positive([1,2,0])).toBe(3);
});

test('0045 跳跃游戏 II first_missing_positive test02', () => {
    expect(first_missing_positive([3,4,-1,1])).toBe(2);
});

test('0045 跳跃游戏 II first_missing_positive test03', () => {
    expect(first_missing_positive([7,8,9,11,12])).toBe(1);
});
