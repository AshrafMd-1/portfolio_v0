let keypress = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];

document.addEventListener("keydown", function (event) {

        if (keypress.includes(event.key.toUpperCase())) {
            new Audio(`./music/${event.key.toUpperCase()}.mp3`).play();
        } else {
            console.log("Enter a correct key.");
        }
        document.querySelector("#A").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(179, 83%, 64%, 1) 0%, hsla(338, 75%, 64%, 1) 50%, hsla(14, 92%, 86%, 1) 100%)`;
        document.querySelector("#S").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)`;
        document.querySelector("#D").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%`;
        document.querySelector("#F").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(177, 87%, 79%, 1) 0%, hsla(235, 89%, 70%, 1) 100%)`;
        document.querySelector("#G").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(141, 81%, 87%, 1) 0%, hsla(41, 88%, 75%, 1) 50%, hsla(358, 82%, 71%, 1) 100%)`;
        document.querySelector("#H").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(192, 80%, 51%, 1) 0%, hsla(355, 85%, 63%, 1) 100%)`;
        document.querySelector("#J").style.background = `linear-gradient(${Math.floor(Math.random() * 1000)}deg,hsla(56, 83%, 59%, 1) 0%, hsla(307, 100%, 66%, 1) 100%)`;

    }
)