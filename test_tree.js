import { Tree } from "./binarytree.js";

function randomNumbers(count = 20, maximum = 100) {
    return Array.from(
        { length: count },
        () => Math.floor(Math.random() * maximum)
    );
}

function printTraversal(name, tree) {
    const values = [];

    if (name === "level") {
        tree.levelOrderForEach((value) => values.push(value));
    } else if (name === "pre") {
        tree.preOrderForEach((value) => values.push(value));
    } else if (name === "post") {
        tree.postOrderForEach((value) => values.push(value));
    } else {
        tree.inOrderForEach((value) => values.push(value));
    }

    console.log(`${name.toUpperCase()} order: ${values.join(", ")}`);
}

function printTraversals(tree) {
    printTraversal("level", tree);
    printTraversal("pre", tree);
    printTraversal("post", tree);
    printTraversal("in", tree);
}

const tree = new Tree(randomNumbers());

console.log("Initial array:", tree.array);
console.log("Is balanced:", tree.isBalanced());
printTraversals(tree);

tree.insert(101);
tree.insert(125);
tree.insert(150);
tree.insert(175);

console.log("\nIs balanced after inserts:", tree.isBalanced());

tree.rebalance();

console.log("Is balanced after rebalance:", tree.isBalanced());
printTraversals(tree);