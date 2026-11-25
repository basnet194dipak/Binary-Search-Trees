import { Node } from "./node";

class Tree
{
    constructor(array)
    {
        this.array = array;
        this.root = this.#buildTree(this.array);
    }

    #buildTree(array)
    {

    }

    includes(value)
    {
        // return true if the value is already in the tree 
        // else return false
    }

    insert(value)
    {
        // do nothing if the value is already included
        // else insert the value in binary tree by preserving binary search property.
    }

    deleteItem(value)
    {
        // remove the value from binary tree
        // if value doesnt exists then do nothing
    }

    levelOrderForEach(callback)
    {
        // if no call back function is proviede throw error

        // traverse in bfs and call the callback in each value as it traverse
        // pass each value but not the node as arguments


    }

    inOrderForEach(callback)
    {

    }

    preOrderForEach(callback)
    {


    }

    postOrderFOrEach(callback)
    {

    }

    height(value)
    {
        // return heigh of node for given value
        // height: longest path from this node to leaf node
    }

    depth(value)
    {
        // depth is number of edges from this node to root node
    }

    isBalanced()
    {
        // the height diff between left subtree and right subtree is no more than 1
        // and both subtree and balanced 
        // check balance condition for every node
    }

    rebalance()
    {
        // rebalance the unbalanced tree
    }


}