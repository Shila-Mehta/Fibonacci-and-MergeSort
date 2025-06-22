function merge(s, arr ,e){
    if(s>=e) return ;

    let m= Math.floor((s + e) / 2)

     merge(s,arr,m);
     merge(m+1,arr,e);

     mergeSort( arr,s,m,e);



}


function mergeSort(arr,s,m,e){

    let left=[];
    let right=[];

    let i=0,j=0,k=s;


    for(let i=s;i<=m;i++){
        left.push(arr[i]);
    }


    for(let j=m+1;j<=e;j++){
        right.push(arr[j]);
    }


    while(i<left.length &&  j< right.length){

         if( left[i] <right[j]){
          arr[k]=left[i];
           i++;
        }
        else{
         arr[k]=right[j]
             j++;
        }

        k++;

    }

  


while(i< left.length){
    arr[k]=left[i];
    i++;
    k++;
}

    
while(j< right.length){
   arr[k]=right[j]
    j++;
    k++;
}


}

let arr=[12,5,20,14,9,30,22,42,19];

merge(0,arr,arr.length-1);
console.log("after sorting");
console.log(arr);