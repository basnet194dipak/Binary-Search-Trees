import { Tree } from "./binarytree.js";
let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let binary = new Tree(array)

console.log(binary.array)
console.log(binary.root.data)
console.log("23",binary.includes(23))
console.log(binary.includes(23000))

binary.deleteItem(23)
console.log("23",binary.includes(23))

console.log("9",binary.includes(9))
binary.deleteItem(9)
console.log("9",binary.includes(9))
// console.log(binary.levelOrderForEach())