const submitBtn = document.querySelector('#submitbtn');
const input = document.querySelector('#username');

submitBtn.addEventListener("click", getUser);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getUser();
    }
});

async function getUser() {
    try {
        const userName = input.value;

        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        document.querySelector('#img').src = data.avatar_url;
        document.querySelector('#name').innerText = data.name || data.login;
        document.querySelector('#follower').innerText = data.followers;
        document.querySelector('#following').innerText = data.following;
        document.querySelector('#repo').innerText = data.public_repos;

    } catch (err) {
        console.log("Error :", err);
    }
}