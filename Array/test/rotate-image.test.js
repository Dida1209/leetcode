const rotate_image = require('../rotate-image.js');

test('0048 旋转图像 test 01', () => {
    expect(rotate_image([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
});

test('0048 旋转图像 test 02', () => {
    expect(rotate_image([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]])
})