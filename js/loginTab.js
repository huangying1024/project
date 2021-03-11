window.onload = function(){
    var oLoginL = document.getElementById("ologinl");
    var oLoginR = document.getElementById("ologinr");
    var oForm = document.getElementById("form-login-text");
    var oFormCode = document.getElementById("form-login-code");
    oLoginL.onclick = function(){
        oLoginL.className = "login-l active";
        oLoginR.className = "login-r"
        oForm.style.display = "none";
        oFormCode.style.display = "block";
    }
    oLoginR.onclick = function(){
        oLoginL.className = "login-l";
        oLoginR.className = "login-r active"
        oForm.style.display = "block";
        oFormCode.style.display = "none";

    }
}