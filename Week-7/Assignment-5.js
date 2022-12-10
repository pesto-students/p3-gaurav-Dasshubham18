function printNge(arr, n){
    
    let s = [];
    
    s.push(arr[0]);
    
    for (let i = 0; i < n; i++){
        
        if (s.length == 0){
            s.push= arr[i];
            continue;
         }
        while ( s.length == 0 ==false && s[s.length -1] < arr[i]){
            document.write(s[s.length - 1] + "-->"+arr [i]+"<br>");
            s.pop();
        }
        s.push(arr[i]);
    }
    while (s.length != 0){
         document.write( s[s.length-1] + "-->"+-1+"<br>" );
        s.pop();
    }
}

var arr = [11, 13, 21, 3];
var n = arr.length;
printNge(arr, n);