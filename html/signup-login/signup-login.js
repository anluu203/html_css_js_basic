//Đăng nhập
function checkform() 
{
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    if (user.value != "" && password.value != "") 
    {
           alert("Đăng nhập thành công");
           window.location.href = "index.html";
           return false;
    }
    else
    {
         alert("Không được để trống thông tin");
    }
}

// Đăng ký
function checkform2() 
{
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    if (user.value !== "" && password.value !== "" && confirm.value !== "") 
        {
        if (password.value === confirm.value) {
            alert("Đăng ký thành công");
        } else {
            alert("Mật khẩu xác nhận không khớp");
        }
    } else {
        alert("Không được để trống thông tin");
    }
}


