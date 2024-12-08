function signUp(str){
    let userName=["Alice","Bob","Charlie"];
    let filetredData = userName.filter((el,i)=>el==str);
    if (filetredData.length==0){
        // i need push
        userName.push(str)
        console.log("Signup Sucessfull........., Please Login,")
    } else{
        console.log("Already Registered......,Please Login..,")

    }
    
} console.log(signUp("Sham"))