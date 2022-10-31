function fieldsCheck(){
    let check = true;

    //Check name
    let name = document.getElementById("name");
    if (name.value === null || !name.value.match("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+\\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\.[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\.")) {
        name.style.background = "red";
        check = false;
    } else {
        name.style.background = "white";
    }

    //Check phone
    let phone = document.getElementById("phone");
    if (phone.value === null || !phone.value.match("((\\(\\d{3}\\) ?)|(\\d{3}-))?\\-\\d{3}-\\d{2}-\\d{2}")) {
        phone.style.background = "red";
        check = false;
    }
    else {
        phone.style.background = "white";
    }

    //Check card
    let card = document.getElementById("card");
    if (card.value === null || !card.value.match("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ][а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+\\s+\\№\\d{6}")) {
        card.style.background = "red";
        check = false;
    } else {
        card.style.background = "white";
    }

    //Check faculty
    let faculty = document.getElementById("faculty");
    if (faculty.value === null || !faculty.value.match("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ][а-щА-ЩЬьЮюЯяЇїІіЄєҐґ][а-щА-ЩЬьЮюЯяЇїІіЄєҐґ][а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]")) {
        faculty.style.background = "red";
        check = false;
    } else {
        faculty.style.background = "white";
    }

    //Check dateOfBirth
    let dateOfBirth = document.getElementById("dateOfBirth");
    if (dateOfBirth.value === null || !dateOfBirth.value.match("\\d{2}\.\\d{2}\.\\d{4}")) {
        dateOfBirth.style.background = "red";
        check = false;
    } else {
        dateOfBirth.style.background = "white";
    }


    if (check == true){
        document.getElementById("info").style.display = "block";
        document.querySelector("form").style.width = "50%";
        let new_name = document.getElementById("new_name");
        new_name.innerText = name.value;
        let new_faculty = document.getElementById("new_faculty");
        new_faculty.innerText = faculty.value;
        let new_dateOfBirth = document.getElementById("new_dateOfBirth");
        new_dateOfBirth.innerText = dateOfBirth.value;
        let new_phone = document.getElementById("new_phone");
        new_phone.innerText = phone.value;
        let new_card = document.getElementById("new_card");
        new_card.innerText = card.value;
    }
}
