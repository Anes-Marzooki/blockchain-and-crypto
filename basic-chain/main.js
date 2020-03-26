// blockchain is fundamentally a list of linked blocks

const hashing = data => {
  return data + "!";
};

class Block {
  constructor(data, hash, previousHash) {
    // storage
    this.data = data;
    // value generated for the block (unique)
    this.hash = hash;
    // creates the link between the new block and the last one
    this.previousHash = previousHash;
  }
}

class Chain {
  constructor() {
    const genesis = new Block("genData", "genHash", "genPrevious");

    this.chain = [genesis];
  }

  addBlock(data) {
    const previousHash = this.chain[this.chain.length - 1].hash;
    const hash = hashing(data + previousHash);
    const block = new Block(data, hash, previousHash);
    this.chain.push(block);
  }
}

// Test
const test = new Chain();
test.addBlock("Jhon");
test.addBlock("Kyle");
test.addBlock("Jalal");

console.log(test);
