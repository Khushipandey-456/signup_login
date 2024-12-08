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
} console.log(signUp("Alice"))

// features/login
function login(userName,passWord){
 let employeesName=["Alice","Bob","Charlie"];
 if (employeesName.includes(userName)) {
 if(passWord="Emp@123"){
    console.log("Login Successfull...")
 }else {
    return "Wrong Password...";
}
} 
else {
return "User Not Found, Please Signup";
}
} console.log(login("Rossy","Emp@123"))