let createNode = (value) => {
  return {
    value,
    next: null,
  };
};

let nodesList = {
  stack: {
    first: null,
    last: null,
    size: null,
  },
  push(val) {
    if (!this.stack.first) {
      this.stack.first = createNode(val);
      this.stack.last = createNode(val);
    } else {
      let temp = this.stack.first;
      this.stack.first = createNode(val);
      this.stack.first.next = temp;
    }
    return ++this.stack.size;
  },
  pop() {
    if (!this.stack.first) {
      return null;
    }
    let temp = this.stack.first;
    if (this.stack.first === this.stack.last) {
      this.last = null;
    }
    this.stack.first = this.stack.first.next;
    this.stack.size--;
    return temp.value;
  },
};

nodesList.push("val 1");
nodesList.push("val 2");
nodesList.push("val 3");
nodesList.push("val 4");

nodesList.pop();
