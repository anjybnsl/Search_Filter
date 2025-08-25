
const users =[
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1559637621-d766677659e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2VzfGVufDB8fDB8fHww",
        bio: "silent chaos in a loud world | not for everyone",
    },
        {
        name: "aryan kapoor",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        bio: "half dreamer, half realist | always hungry",
    },
    {
        name: "kiara sharma",
        pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        bio: "smiles louder than words | coffee in one hand, confidence in the other",
    },
    {
        name: "vivaan joshi",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        bio: "writing my own plot twist | chai over coffee any day",
    },
    {
        name: "meera bansal",
        pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        bio: "flower child with a thorny side | music is my escape",
    },
];



function showusers(arr){
    arr.forEach(function(user){
        // create outer card div
        const card = document.createElement("div");
        card.classList.add("card");

        // create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create blurred-layer div
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // create content div
        const content = document.createElement("div");
        content.classList.add("content");

        // create h3 and paragraph
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        // Append heading and paragraph to content
        content.appendChild(heading);
        content.appendChild(para);

        // Append all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Finally, append card to the body or any container
        document.querySelector(".cards").appendChild(card);
    });
}

showusers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function(){
    let newUsers = users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });

    document.querySelector(".cards").innerHTML = "";
    showusers(newUsers);
});

