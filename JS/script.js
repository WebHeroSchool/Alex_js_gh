let body = document.body;
let urlHero = 'https://api.github.com/users/AlNeon';

fetch(urlHero)
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
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Описание профиля не доступно';
        }
        body.append(bio);

        let avatar = new Image(250, 250);
        avatar.src = json.avatar_url;
        body.append(avatar);
    })
    .catch(err => alert('Информация о пользователе недоступна'));