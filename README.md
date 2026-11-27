# Binary Search Trees

A JavaScript implementation of a balanced binary search tree (BST). The project
builds a tree from an array, supports insertion and removal, provides several
traversal methods, and can inspect or rebalance the tree.

This project is part of [The Odin Project](https://www.theodinproject.com/)
JavaScript curriculum.

## Features

- Builds a balanced BST from an array
- Removes duplicate values while building the tree
- Inserts values while preserving BST ordering
- Deletes values and rebuilds the tree
- Searches for values
- Traverses nodes in level-order, in-order, pre-order, and post-order
- Calculates node height and value depth
- Checks whether the tree is balanced
- Rebalances an unbalanced tree

## Project Structure

- `node.js` - defines the `Node` class used by the tree
- `binarytree.js` - defines the `Tree` class and BST operations
- `test_tree.js` - example usage of the implementation
- `README.md` - project documentation

## Requirements

- Node.js

The project uses JavaScript ES modules.

## Getting Started

Clone the repository and enter the project directory:

```bash
git clone https://github.com/basnet194dipak/Binary-Search-Trees.git
cd Binary-Search-Trees
```

Run the driver script:

```bash
node test_tree.js
```

The script creates a balanced tree from random values below 100, prints all
four traversal orders, adds several values above 100 to unbalance the tree,
and then calls `rebalance()` and verifies the final state.

## Usage

Import `Tree` and create an instance from an array:

```javascript
import { Tree } from "./binarytree.js";

const values = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(values);
```

The constructor sorts the supplied array and uses the midpoint repeatedly to
create a balanced tree. Duplicate values are excluded from the tree.

### Search

```javascript
tree.includes(23); // true
tree.includes(100); // false
```

### Insert

```javascript
tree.insert(10);
```

Inserting a value already present in the tree has no effect.

### Delete

```javascript
tree.deleteItem(23);
```

Deleting a value that is not present has no effect.

### Traversals

Each traversal method accepts a callback and invokes it once with the data for
each visited node.

```javascript
const levelOrder = [];
tree.levelOrderForEach((value) => levelOrder.push(value));

const inOrder = [];
tree.inOrderForEach((value) => inOrder.push(value));

const preOrder = [];
tree.preOrderForEach((value) => preOrder.push(value));

const postOrder = [];
tree.postOrderForEach((value) => postOrder.push(value));
```

| Method | Traversal order |
| --- | --- |
| `levelOrderForEach(callback)` | Breadth-first, one level at a time |
| `inOrderForEach(callback)` | Left, node, right |
| `preOrderForEach(callback)` | Node, left, right |
| `postOrderForEach(callback)` | Left, right, node |

A callback must be a function. Passing no callback or a non-function value
throws an error for traversal methods.

### Height

`height(node)` accepts a node and returns the longest path from that node to a
leaf. A `null` node has a height of `-1`.

```javascript
const height = tree.height(tree.root);
```

### Depth

`depth(value)` returns the number of edges between the supplied value and the
tree root.

```javascript
const depth = tree.depth(23);
```

If the value is not present, the method reports that the value does not exist.

### Balance

```javascript
tree.isBalanced(); // true or false

if (!tree.isBalanced()) {
  tree.rebalance();
}
```

`rebalance()` collects the values in in-order traversal and rebuilds the tree
as a balanced BST.

## Complexity

For a balanced BST containing `n` nodes:

| Operation | Average complexity |
| --- | --- |
| Search | O(log n) |
| Insert | O(log n) |
| Delete | O(n) |
| Traversal | O(n) |
| Height | O(n) |
| Depth | O(log n) |
| Balance check | O(n log n) for a balanced tree |
| Rebalance | O(n) |