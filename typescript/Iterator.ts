function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

for (const value of makeRangeIterator(0, 10, 2)) {
    console.log(value)
}

// Array is iterator
for (const value of [1, 2, 3, 4, 5]) {
    console.log(value)
}

function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
        current = 0;
        next = 1;
    }
  }
}