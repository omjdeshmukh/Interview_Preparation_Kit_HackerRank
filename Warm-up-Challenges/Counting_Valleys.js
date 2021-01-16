function countingValleys(steps, path) {
    // Write your code here
    var valley = 0;
    var count = 0;
    
    for(var i = 0; i < steps; i++){
        
        if(path[i] == 'D'){
            count--;
        }
        else{
            if(count == -1){
                valley++;
            }
            count++;
        }
    }return valley;
}