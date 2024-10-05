


const str = " High knowledge, high return";
const arr = str.split(' ');
const result = arr
    .filter(function(item) {
        return item !== "";
    })
    .map(function(item) {
        return item.toLowerCase();
    });
console.log(result);


const m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

const filtered = m.filter(function(item) {
    return typeof item === 'number';
});
const mSquared = filtered.map(function(item) {
    return Math.pow(item, 2);
});
console.log(mSquared);
