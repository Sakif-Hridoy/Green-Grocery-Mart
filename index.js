const myArray = ["Sakif","Sakib","Hridoy","Ashfaq"]

for (let i=0; i <myArray.length; i++){
    console.log(i) // ouput hisebe array er index gula dekhabe serially ba loop kore mane indexgula dekhabe ar ki
    console.log(myArray)// pura myArray ta array akare joto length array er totobar print kore dekhabe....array akarei mane length 5 hole 5 ta array hobe
    console.log(myArray[i]);// ar eta to specific vabe point korar jonno ... ar ha eibarei kintu asol ouput dekhabe orthat mayarray te jehetu i ke index hisebe dhoraya deoa hoise tai array er eobgula element print hobe

}


const secondArray = [27,32,4,1,7,34,49,60,96,44,55]

for (let i = 0; i<secondArray.length;i++){
    if(secondArray[i]>40){
        console.log(secondArray[i])
    }
}