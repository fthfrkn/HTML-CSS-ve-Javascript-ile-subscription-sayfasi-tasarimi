function control(){
    let id = document.getElementById("id_text").value;
    let length_id = id.length;

    let pass = document.getElementById("pass_text").value;
    let length_pass = pass.length;

    let name = document.getElementById("name_text").value;
    let length_name = name.length;

    let family = document.getElementById("family_text").value;
    let length_family = family.length;

    var alphabetic = /^[A-Za-z]+$/;
    
    let phone = document.getElementById("phone_text").value;
    let length_phone = phone.length;

    let email = document.getElementById("email_text").value;
    let length_email = email.length;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var element1 = document.getElementById("header1");
    var element2 = document.getElementById("header2");
    var element3 = document.getElementById("header3");
    var element4 = document.getElementById("header4");
    var element5 = document.getElementById("header5");
    var element6 = document.getElementById("header6");
        
    if(isNaN(id) || length_id < 8 || length_id > 12){
        element1.style.color = "red";
        alert("Lütfen 8-12 haneli bir ID giriniz!");
    }
    else{
        element1.style.color = "green";
    }
    if(isNaN(pass) || length_pass < 8 || length_pass > 10){
        element2.style.color = "red";
        alert("Lütfen 8-10 haneli bir şifre giriniz!");
    }
    else{
        element2.style.color = "green";
    }
    if(name.match(alphabetic)){
        element3.style.color = "green";
        return true;
    }
    else{
        element3.style.color = "red";
        alert("Lütfen sadece harflerden oluşan bir isim giriniz!");
    }
    if(family.match(alphabetic)){
        element4.style.color = "green";
        return true;
    }
    else{
        element4.style.color = "red";
        alert("Lütfen sadece harflerden oluşan bir soy isim giriniz!");
    }
    if(isNaN(phone) || length_phone != 10 || !phone.match(/^\d+/)){
        element5.style.color = "red";
        alert("Lütfen 10 haneli bir telefon numarası giriniz!");
    }
    else{
        element5.style.color = "green";
    }
    if(isNaN(email) || email.match(mailformat)){
        element6.style.color = "green";
        return true;
    }
    else{
        element6.style.color = "red";
        alert("Lütfen geçerli bir e-mail giriniz!");
    }
}
