let createNode = (value) => {
  return {
    value,
    next: null,
  };
};

let nodesList = {
  queue: {
    first: null,
    last: null,
    size: null,
  },
  enter(val) {
    const newNode = createNode(val);
    if (!this.queue.first) {
      this.queue.first = newNode;
      this.queue.last = newNode;
    } else {
      this.queue.last.next = newNode;
      this.queue.last = newNode;
    }
    return ++this.queue.size;
  },
  leave() {
    if (!this.queue.first) {
      return null;
    }
    let temp = this.queue.first;
    if (this.queue.first === this.queue.last) {
      this.last = null;
    }
    this.queue.first = this.queue.first.next;
    this.queue.size--;
    return temp.value;
  },
};

nodesList.enter("val 1");
nodesList.enter("val 2");
nodesList.enter("val 3");
nodesList.enter("val 4");

nodesList.leave();

console.log(nodesList);
