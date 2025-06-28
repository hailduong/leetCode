class RecentCounter {

  counter: number[]

  constructor() {
    // Initializes the counter with zero recent requests.
    this.counter = [];
  }

  ping(t: number): number {
    // t: time in ms
    // Everytime ping is called, we need to add th value to the counter
    this.counter.push(t)
    const counterQueue = this.counter;
    const count = counterQueue.length

    while (counterQueue[0] < (t - 3000)) counterQueue.shift()

    return counterQueue.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
