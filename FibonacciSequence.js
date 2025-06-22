
function fibs(num){
    let arr=[];
    let a=0,b=1,c;

     for(let i=0;i<num;i++){
        arr.push(a);
        c=a+b;
        a=b;
        b=c;
       
     }
    
     return arr;

}



  function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibsRec(n - 1); 
  const next = seq[seq.length - 1] + seq[seq.length - 2]; 
  return [...seq, next]; 
}

console.log(fibs(8));
console.log(fibsRec(8)); 