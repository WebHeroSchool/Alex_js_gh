let body = document.body;
let url = window.location.toString();
let arr = url.split('=');
let userName = (arr[1] !== undefined && arr[1].length <= 15) ? arr[1] : 'AlNeon';
let gitHub = `https://api.github.com/users/${userName}`;

fetch(gitHub)
    .then(res => res.json())
    .then(json => {

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
    })
    .catch(err => alert('Информация о пользователе недоступна'));