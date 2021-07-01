function buat_login(){
    let elem = document.getElementById('X');
    elem.parentElement.removeChild(elem);
    let p = document.createElement('p');
    p.className = "tulisan_login";
    p.innerHTML = "silahkan mendaftar";
    let newEl = document.getElementsByTagName('div')[0];
    newEl.appendChild(p);

    let form = document.createElement('form');
    newEl.appendChild(form);

    let labelName = document.createElement('label');
    labelName.innerHTML = "Nama User";
    form.appendChild(labelName);
    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'nama';
    inputName.className = 'form_login';
    inputName.placeholder = 'Nama User..'
    form.appendChild(inputName);

    let labelHp = document.createElement('label');
    labelHp.innerHTML = "Nomor Handphone";
    form.appendChild(labelHp);
    let inputHp = document.createElement('input');
    inputHp.type = 'text';
    inputHp.name = 'nomor_hp';
    inputHp.className = 'form_login';
    inputHp.placeholder = 'Nomor Handphone..'
    form.appendChild(inputHp);

    let labelUname = document.createElement('label');
    labelUname.innerHTML = "Username";
    form.appendChild(labelUname);
    let inputUname = document.createElement('input');
    inputUname.type = 'text';
    inputUname.name = 'username_email';
    inputUname.className = 'form_login';
    inputUname.placeholder = 'Username atau Email..'
    form.appendChild(inputUname);

    let labelPass = document.createElement('label');
    labelPass.innerHTML = "Password";
    form.appendChild(labelPass);
    let inputPass = document.createElement('input');
    inputPass.type = 'password';
    inputPass.name = 'password';
    inputPass.className = 'form_login';
    inputPass.placeholder = 'Password..'
    form.appendChild(inputPass);

    let tombol = document.createElement('input');
    tombol.type = 'submit';
    tombol.value = 'DAFTAR SEKARANG';
    tombol.className = 'tombol_login';
    form.appendChild(tombol);
}