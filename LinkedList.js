import { Node } from "./Node";

class LinkedList{

    head=null;
    tail=null;

    size=0;


     append(data){

        const newNode=new Node(data);

        if(head==null){
            head=newNode;
            tail=newNode
        }
        else if( head!=null && this.head.next==null){
           this.head.next=newNode;
           tail=newNode;
        }
        else{

            let  temp=this.head;

            while(temp!==null){
                this.temp=this.temp.next;
            }

            this.temp.next=newNode;
            tail=newNode;
        }
      size++;




    }


    prepend(data){
        const newNode=new Node(data);

        if(head==null){
            head=newNode;
            tail=newNode;
        }

        else if(head!=null){
             newNode.next=this.head;
             tail=this.head;
             head=newNode;
        }

        size++;
        
    }


    getSize(){
        return this.size;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.tail;
    }


    atIndex(index){

        let i=0;

        let temp=this.head;

        while(temp.next!=null && i<index){
          temp=temp.next;
          i++;
        }

        return temp;

    }


    pop(){
        let temp=this.head;
        while(temp.next.next!=null){
            temp=temp.next;
        }
         const node=temp;
         temp=null;

         size--;

         return temp;


    }


    contains(data){

       let temp=this.head;
        while(temp.next!=null ){
            if(temp.data===data){
              return true;
            }
            temp=temp.next;
        }
         
         return false;
    }


    find(data){
         let i=0;

        let temp=this.head;

        while(temp.next!=null ){

         if(temp.data===data){
              return i;
        }
          temp=temp.next;
          i++;
        }

        return null;
    }

    display(){

        let i=0;

        let temp=this.head;

        while(temp.next!=null ){

          console.log(temp.toString()+"->");
        }
          temp=temp.next;
        
        }

      
}


    

const list=new LinkedList();
 console.log("start");
 
list.append("dog");


  

 



 
  