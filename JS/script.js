fetch('https://api.github.com/users/AlNeon')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));