function getKnightMoves(x,y){
    const moves=[
        [x+2,y-1],
        [x+2,y+1],
        [x-2,y-1],
        [x-2,y+1],
        [x-1,y+2],
        [x+1,y+2],
        [x-1,y-2],
        [x+1,y-2]

    ]

    return moves.filter(([cx,cy])=>cx>=0 &&  cy>=0  &&  cx<8 && cy<8);
}

function knightMoves(start,end){

    const queue=[];
    const visited=new Set();
    queue.push({position:start,parent:null});

    visited.add(start.toString());

    while(queue.length>0){
       const current= queue.shift();
       const [x,y]=current.position;


       //check if we  reached the goal
       if(x==end[0] &&  y==end[1]){
        const path=[];
        let node=current;
       
        while(node){
            path.unshift(node.position);
            node=node.parent;
        }

        console.log(`You made it in ${path.length-1} moves! Here's your path`);
        path.forEach((pos)=>console.log(pos));
        return path;
       }


       // Expand to next valid knight moves
       const nextMoves=getKnightMoves(x,y);
       for(const move of nextMoves){
        const key=move.toString();

        if(!visited.has(key)){
            visited.add(key);
            queue.push({ position:move,parent:current });
        }


       }
  


    }
     
    return null;
}

knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
