const profiles = [
    { id: 1, username: "mojombo", img: "https://s3.amazonaws.com/keybase_processed_uploads/08c93d550786216a5e1cc4327caa5105_360_360_square_360.png" },
    { id: 2, username: "defunkt", img: "path/to/defunkt.jpg" },
    { id: 3, username: "pjhyett", img: "path/to/pjhyett.jpg" },
    { id: 4, username: "wycats", img: "path/to/wycats.jpg" },
    { id: 5, username: "ezmobius", img: "path/to/ezmobius.jpg" },
    { id: 6, username: "ivey", img: "path/to/ivey.jpg" },
    { id: 7, username: "evanphx", img: "path/to/evanphx.jpg" },
    { id: 17, username: "vanpelt", img: "path/to/vanpelt.jpg" }
];

const container = document.getElementById('profileContainer');

profiles.forEach(profile => {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');

    const img = document.createElement('img');
    img.src = profile.img;
    img.alt = profile.username;

    const username = document.createElement('div');
    username.classList.add('username');
    username.textContent = ${profile.id} - ${profile.username};

    profileCard.appendChild(img);
    profileCard.appendChild(username);
    container.appendChild(profileCard);
});
