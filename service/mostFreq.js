module.exports = (arr, smallWord) => {
    var obj = {}, mostFreq = 0, which = [];
    arr = arr.replace(/[^\w\s]/gi, '').toLowerCase();
    console.log(arr)
    arr = arr.split(' ');


    for (ea of arr) {
        if (ea.length <= 2 && smallWord)
            continue;

        ea = ea.trim();
        if (!obj[ea]) {
            obj[ea] = 1;
        } else {
            obj[ea]++;
        }

        if (obj[ea] > mostFreq) {
            mostFreq = obj[ea];
            which = [ea];
        } else if (obj[ea] === mostFreq) {
            which.push(ea);
        }
    }
    return which;
}