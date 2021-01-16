// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    var arr = ar.sort();
    var c = 0;
    
    for(var i = 0; i < n ; i++){
        
        if(arr[i] == arr[i+1]){
            c++;
            arr[i+1] = 0;         
        }
    }return c;
}
