// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const arrRes = [];
    matrix.map((item, index) =>
        index % 2 === 0 ? arrRes.push(...item) : arrRes.push(...item.reverse())
    );
    return arrRes;
};
