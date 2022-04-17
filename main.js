function runProgram(input) {
  input=input.trim().split('\n');
  var tc=+input[0]
  var line=1;
  for(var i=0;i<tc;i++){
      var n1=+input[line];
      line++;
      var arr1=input[line].trim().split(" ").map(Number);
      line++
      var n2=+input[line];
      line++;
      var arr2=input[line].trim().split(" ").map(Number);
      line++
      var bag="";
      for(var a=0;a<n1;a++){
         for(var b=0;b<n2;b++){
            //  console.log(arr1[a],arr2[b])
            if(arr1[a]==arr2[b]){
                // console.log(arr1[a]);
                bag+=arr2[b]+" ";
                break;
            }
         }
     }
     if(bag){
         console.log(bag);
        }else{
         console.log(-1);
     }
  }

}

// 2
// 6
// 1 2 3 4 5 6
// 3
// 3 3 5
// 4 
// 1 2 3 4
// 4 
// 5 6 7 8
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

