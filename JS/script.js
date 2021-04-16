let body = document.body;
let url = window.location.toString();
let userName;
let date;

let getDate = new Promise((resolve, reject) => {
    setTimeout(() => {
        date = new Date();
        resolve(date);
    }, 1000);
})

let getUrl = new Promise((resolve, reject) => {
    setTimeout(() => {
        let arr = url.split('=');
        userName = (arr[1] !== undefined && arr[1].length <= 15) ? arr[1] : 'AlNeon';
        resolve(userName);
    }, 3000);
})

Promise.all([getDate, getUrl])
    .then(([date, url]) => fetch(`https://api.github.com/users/${userName}`))
    .then(res => res.json())
    .then(json => {
        preloader.classList.add('hidden');

        let name = document.createElement('a');
        if (json.name != null) {
            name.innerHTML = json.name;
            name.href = json.html_url;
            name.classList.add('nameLink');
        } else {
            name.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(name);

        let bio = document.createElement('h3');
        bio.innerHTML = (json.bio !== null) ? json.bio : 'Описание профиля не доступно';
        body.append(bio);

        let avatar = new Image(250, 250);
        avatar.src = json.avatar_url;
        body.append(avatar);

        let currentDate = document.createElement('h5');
        currentDate.innerHTML = date ? date : 'Текущие дата и время не доступны';
        body.append(currentDate);
    })
    .catch(err => alert('Информация о пользователе недоступна'));