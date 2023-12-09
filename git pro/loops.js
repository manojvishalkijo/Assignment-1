function printEven(arr) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]%2==0){
        console.log(arr[i]); //print even number
      }  
    }
  }
  var arr = [13,23,12,45,22,48,66,100]
  
  printEven(arr) 

  
  for(var i=0;i<5;i++){
    setTimeout(()=>console.log(i), 5000);// 5 5 5 5 5
  }
  

  
  function printEven(arr) {
   
    const evenNumbers = arr.filter(function (num) {
      return num % 2 === 0;
    });
  

    evenNumbers.map(function (evenNumber) {
      console.log(evenNumber);
    });
  }
  
  var arr = [13, 23, 12, 45, 22, 48, 66, 100];
  
  printEven(arr);
  