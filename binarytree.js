import { Node } from "./node.js";

class Tree
{
    constructor(array)
    {
        this.array = array.sort((a, b) => a - b);
        this.root = this.#buildTree(this.array);
    }

    #buildTree(array)
    {
        
        // sort and remove duplicates
        array.sort((a, b) => a - b)
        let unique = [...new Set(array)] 
        // turn into a balanced binary tree 
        // helper function 
        function helper(unique){

            if (unique.length === 0) {
                return null;
            }

            // get the midpoint and assign it to root
            let midpoint = Math.floor(unique.length/2)
            let root = new Node(unique[midpoint])
            root.left = helper(unique.slice(0, midpoint))
            root.right = helper(unique.slice(midpoint+1))

            return root
        }
        // return level zero root nodes

        return helper(unique)
        // call it for initializing the value of root node
    }

    includes(value)
    {
        // return true if the value is already in the tree 
        let root = this.root
        function helper(root)
        {
                // Value not found
            if (root === null) {
                return false;
            }

            if (root.data == value)
            {
                return true
            }

            if (value > root.data)
            {
                return helper(root.right)
            }
            else
            {
                return helper(root.left)
            }
        }
        // else return false
       return helper(root)
    }

    insert(value)
    {
         // If the tree is empty
        if (this.root == null)
        {
            this.root = new Node(value);
            return;
        }

        // do nothing if the value is already included
        // else insert the value in binary tree by preserving binary search property.
        function helper(root)
        {
            if (value < root.data)
            {
                if (root.left == null)
                {
                    root.left = new Node(value)
                }

                else{
                    // traverse to left 
                    helper(root.left)
                }
                
            }
            else if (value > root.data)
            {
                // if leaf node reached insert the value
                if (root.right == null)
                {
                    root.right = new Node(value)
                }

                else{
                     // traverse to right 
                    helper(root.right)
                }
               
            }
        }
        helper(this.root)
    }

    deleteItem(value)
    {
        if (this.root == null){
            // if  rooot is already null then value doesnt exists so do nothing
            return 
        }

        // remove the value from binary tree
        // if value doesnt exists then do nothing
        function helper(root)
        {
            

            if (root.data == value)
            {
                if (root.left == null && root.right==null)
                    {
                        // now the root is leaf node so desolve the node 
                        root = null
                        return
                    }
                let change_root 

                if (root.left != null)
                {
                    change_root = root.left
                }

                else if (root.right != null)
                {
                    change_root = root.right 
                }

                // exchange the data 
                let exchange = root.data 
                root.data = change_root.data 
                change_root.data = exchange

                // pass the root that has been changed
                helper(change_root)

            }
            
            else
            {
                // if we havent reached the node with value then reach there first
                if (value < root.data)
                {
                    helper(root.left)
                }
                else{
                    helper(root.right)
                }
            }
        }

        helper(this.root)

    }

    levelOrderForEach(callback)
    { 
        if (typeof callback !== "function") {
            throw new Error("Callback must be a function");
        }

        if (this.root == null)
        {
            return 
        }
        // if no call back function is proviede throw error
        let queue = [this.root]

        // traverse in bfs and call the callback in each value as it traverse
        while (queue.length > 0)
        {
            let root = queue.shift()
            callback(root.data)
            if (root.left != null)
            {
                queue.push(root.left)
            }

            if (root.right != null)
            {
                queue.push(root.right)
            }
        }
        // pass each value but not the node as arguments

    }

    inOrderForEach(callback)
    {
        if (typeof callback !== "function") {
            throw new Error("Callback must be a function");
        }

        if (this.root == null)
        {
            return 
        }

        function helper(root)
        {
            if (root === null)
            {
                return
            }

            helper(root.left)
            callback(root.data)
            helper(root.right)
        }
        helper(this.root)
    }

    preOrderForEach(callback)
    {
        if (typeof callback !== "function") {
            throw new Error("Callback must be a function");
        }

        if (this.root == null)
        {
            return 
        }
        function helper(root)
        {
            if (root === null)
            {
                return 
            }

            callback(root.data)
            helper(root.left)
            helper(root.right)
        }

        helper(this.root)

    }

    postOrderFOrEach(callback)
    {
        if (typeof callback !== "function") {
            throw new Error("Callback must be a function");
        }

        if (this.root == null)
        {
            return 
        }

        function helper(root)
        {
            if (root === null)
            {
                return 
            }
            
            helper(root.left)
            helper(root.right)
            callback(root.data)
        }

        helper(this.root)
    }

    height(value)
    {
        // return height of node for given value
        // height: longest path from this node to leaf node
        if (value == null)
        {
            return 0
        }

        if (value.left == null)
        {
            return 1
        }

        if (value.right == null)
        {
            return 1
        }

        left_height = 1 + this.height(value.left)
        right_height = 1 + this.height(value.right)

        if (left_height > right_height)
        {
            return left_height
        }

        else{
            return right_height
        }
    }

    depth(value)
    {
        // depth is number of edges from this node to root node
        if (this.includes(value))
        {
            let depth = 0
            function helper(root)
            {
                if (root.data == value)
                {
                    return depth
                }
                else
                {
                    depth++
                }
                if (value< root.data)
                {
                    return helper(root.left)
                }
                else{
                    return helper(root.right)
                }
            }
            return helper(this.root)

        }
        else{
            console.log("Value doesnt exists to find the depth")
        }
    }

    isBalanced()
    {
        // the height diff between left subtree and right subtree is no more than 1
        // and both subtree are balanced 
        // check balance condition for every node.


        function helper(root)
        {
             if (root == null)
            {
                return true
            }

            left_height = this.height(root.left)
            right_height = this.height(root.right)

            
            if (Math.abs(left_height - right_height) > 1)
            {
                return false
            }

            return helper.call(this, root.left) &&
               helper.call(this, root.right);
        }

        return helper(this.root)

    }

    rebalance()
    {
        // rebalance the unbalanced tree
    }

}

export {Tree}