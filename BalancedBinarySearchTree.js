class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;

    }
}


class Tree{
    constructor(array){
        this.array=array;
         this.root=this.buildTree(array);
    }

   
    buildTree(array){

        if(array.length==0) return null;

        // sorting the array
        array.sort((a,b)=>a-b);

         array= Array.from(new Set(array));
        

       return this.helper(0,array,array.length-1);
    }

    helper(s,array,e){

     if(s>e) return null;

      const m = Math.floor((s + e) / 2);
      const node=new Node(array[m]);

      node.left=this.helper(s,array,m-1)
      node.right=this.helper(m+1,array,e);

      return node;

        
    }


    insert(data){

     this.root= this._insertRecursively(this.root, data);
    }


    _insertRecursively(root, data){
      const node=new Node(data);

        if(root==null){
            return node;
            
        }


        if(data===root.data) return root;


        if(root.data > data){
            root.left=this._insertRecursively(root.left,data);
        }
        else{
          root.right=this._insertRecursively(root.right,data);
        }

        return root;


    }



    deleteItem(data){
        this.root = this._deleteRecursively(this.root, data);

    }

    _deleteRecursively(root,data){
        if(root==null) return null;
        else{

            if(root.data > data){
                root.left=this._deleteRecursively(root.left,data);
            }
            else if(root.data < data){
               root.right=this._deleteRecursively(root.right,data);
            }
            else{
                 if(root.right===null &&  root.left===null) return null;
                if(root.left==null  )  return root.left;
                if(root.right==null  )   return root.right;

                const successor=this.findmin(root.right);
                root.data=successor.data;
                root.right=this._deleteRecursively(root.right,successor.data);

            }



        }

        return root;
    }

      find(value) {
       return this._findRecursively(this.root, value);
       }

       _findRecursively(root,value){

        if(root===null) return null;

        if(root.data===value) return root;

        if(root.data > value) return this._findRecursively(root.left,value);
        else{return  this._findRecursively(root.right,value)}


       }



    findmin(node){
        while(node.left!=null){
            node=node.left;
        }

        return node;
    }


    levelOrder(callback){

        if (typeof callback !== "function") throw new Error("Callback required");


          const queue = [];

        queue.push(this.root);

        while(queue.length > 0){
            const current=queue.shift();

            callback(current);

            if(current.left)  queue.push(current.left);
            if(current.right)  queue.push(current.right);
        }


    }

    inorder(callback){
     if (typeof callback !== "function") throw new Error("Callback required");

    this._inOrderRecursively(this.root, callback)
    }

    _inOrderRecursively(node, callback){
        if(node==null ) return ;
        this._inOrderRecursively(node.left,callback);
        callback(node);
        this._inOrderRecursively(node.right,callback);

    }
    preorder(callback){
     if (typeof callback !== "function") throw new Error("Callback required");

       this._preOrderRecursively(this.root, callback)
    }

    _preOrderRecursively(node, callback){
        if(node==null ) return ;
         callback(node);
        this._preOrderRecursively(node.left,callback);
        this._preOrderRecursively(node.right,callback);

    }

    postorder(callback){
     if (typeof callback !== "function") throw new Error("Callback required");

       this._postOrderRecursively(this.root, callback)
    }

    _postOrderRecursively(node, callback){
        if(node==null ) return ;
        this._postOrderRecursively(node.left,callback);
        this._postOrderRecursively(node.right,callback);
         callback(node);

    }

    height(value){

        const node=this.find(value);

       if(!node){
        return null;
       }

        return this._getHeight(node);


    }

    _getHeight(node){
        if(node===null){
            return -1;
        }

        return  1 + Math.max(this._getHeight(node.left),this._getHeight(node.right));
    }


    depth(value){
       return this._getDepth(this.root,value,0);
    }

    _getDepth(node,value,depthSoFar){

        if(node==null) return null;

        if(node.data===value) return depthSoFar;

        if(node.data > value) return this._getDepth(node.left,value,depthSoFar+1);
        else return this._getDepth(node.right,value,depthSoFar+1);

    }


    isBalanced(){
       return this._checkBalance(this.root)!==-1;
    }

    _checkBalance(node){
        if(node==null) return 0;

        const leftHeight=this._checkBalance(node.left);
        if(leftHeight===-1)  return -1;
        const rightHeight=this._checkBalance(node.right);

         if(rightHeight===-1)  return -1;

        if(Math.abs(leftHeight-rightHeight)>1) return -1;

        return 1+ Math.max(leftHeight,rightHeight);


    }


    toArray(){
        const result=[];
        this.inorder((node)=>result.push(node.data));
        return result;
    }


    rebalance(){
        const sortedData=this.toArray();
        this.root=this.buildTree(sortedData);
    }
    
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};



 //initial tree construction
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);


console.log("Is tree balanced?", tree.isBalanced()); // true


// testing all traversals
console.log("Level Order:");
tree.levelOrder(node => console.log(node.data));

console.log("Preorder:");
tree.preorder(node => console.log(node.data));

console.log("Inorder:");
tree.inorder(node => console.log(node.data));

console.log("Postorder:");
tree.postorder(node => console.log(node.data));


//unbalance the tree
tree.insert(1000);
tree.insert(2000);
tree.insert(3000);
tree.insert(4000);
tree.insert(5000);

console.log("After unbalancing:");
prettyPrint(tree.root);
console.log("Is balanced?", tree.isBalanced()); // should be false



//rebalance

tree.rebalance();
console.log("After rebalancing:");
prettyPrint(tree.root);
console.log("Is balanced?", tree.isBalanced()); // should be true

