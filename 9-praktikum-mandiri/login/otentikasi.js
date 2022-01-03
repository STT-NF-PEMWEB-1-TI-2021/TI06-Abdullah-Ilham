function login(e){
    e.preventDefault()
    let user = document.getElementById("user").value
    let pasword = document.getElementById("pasword").value

    if(user == "walter01" && pasword == "1sampai8"){
        location.href = "sukses.html"
    }else{
        alert("Login Gagal")
    }
}