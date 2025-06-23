
class HashMap{

    constructor( ){
      this.capacity=16;
      this.loadFactor=0.75;
      this.buckets=new Array(this.capacity).fill(null).map(()=>[]);
      this.size=0;
    }
    

    hash(key){
    let hashCode=0;
    const primeNumber=31;

    for(let i=0;i<key.length;i++){
        hashCode=(primeNumber*hashCode +key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;

    }


    set(key,value){

        const index=this.hash(key);
        const bucket=this.buckets[index];


        // If key already exists then update the value
         for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket[i][1]=value;
                return;
            }
         }

         // if key not exist
         bucket.push([key,value]);
         this.size++;

         // checking the loading factor
         if(this.size/this.capacity>this.loadFactor){
            this.resize();
         }

    }



    get(key){

        const index=this.hash(key);
        const bucket=this.buckets[index];

        
         for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                 return  bucket[i][1];
            }
         }


         return null;

     }


     has(key){

        const index=this.hash(key);
        const bucket=this.buckets[index];

        
         for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                 return  true;
            }
         }


         return false;

     }


      remove(key){

        const index=this.hash(key);
        const bucket=this.buckets[index];

        
         for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                 bucket.splice(i,1);
                 this.size--;
                 return true;
            }
         }


         return false;

       
      }


      length(){

        return this.size;

        }



     clear(){
     this.buckets=new Array(this.capacity).fill(null).map(()=>[]);
     this.size=0;

       }



 keys(){

    let keysArray=[];
    for(let bucket of this.buckets){
        for(const [key,value] of bucket){
            keysArray.push(key);
        }

    }
   return keysArray;
}



values(){

    let valuesArray=[];
    for(let bucket of this.buckets){
        for(const [key,value] of bucket){
            valuesArray.push(value);
        }

    }
   return valuesArray;

}



entries(){

    let entriesArray=[];
    for(let bucket of this.buckets){
        for(const [key,value] of bucket){
            entriesArray.push([key,value]);
        }

    }
   return entriesArray;

}


resize(){
    const oldBuckets=this.buckets;
    this.capacity*=2;
    this.buckets=new Array(this.capacity).fill(null).map(()=>[]);
    this.size=0;
  
    for(let bucket of oldBuckets){
        for(  const [key,value] of bucket){
            this.set(key,value);
        }
    }


}




}







const map = new HashMap();

map.set("name", "Nimra");
map.set("city", "RahimYarKhan");

console.log(map.get("name"));       // Nimra
console.log(map.has("city"));       // true
console.log(map.has("country"));    // false

map.set("city", "Lahore");
console.log(map.get("city"));       // Lahore

map.remove("name");
console.log(map.get("name"));       // null

console.log(map.length());          // 1
console.log(map.keys());            // ["city"]
console.log(map.values());          // ["Lahore"]
console.log(map.entries());         // [["city", "Lahore"]]

map.clear();
console.log(map.length());          // 0





