export default class Queue {
  #queue;
  constructor() {
    this.#queue = [];
  }

  enqueue(value) {
    this.#queue.push(value);
  }

  dequeue() {
    if (this.read()) return this.#queue.shift();
    return null;
  }

  read() {
    if (this.#queue.length) return this.#queue[0];
    return null;
  }
}
