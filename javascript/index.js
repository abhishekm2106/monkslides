var preloader = document.querySelector('#preloader')

window.onload = () => {
    preloader.style.opacity = 0;
    window.setTimeout(function () {
        preloader.style.display = 'none'; //to remove the preloader after the page has loaded
    }, 1000);
}

let data = [
    {
        text: "we are breaking our vow of scilence",
        headingPosition: "",
        position: "0%"
    },
    {
        text: "Talent is given true sill is earned",
        headingPosition: "left",
        position: "15%"
    },
    {
        text: "Be flexible to change and sturdy in conviction",
        headingPosition: "left",
        position: "30%"
    },
    {
        text: "use many skills yet work as one",
        headingPosition: "right",
        position: "45%"
    },
    {
        text: "To master anything find interest in everything",
        headingPosition: "right",
        position: "60%"
    },
    {
        text: "Individuals florish if culture and wisdom are shared",
        headingPosition: "right",
        position: "75%"
    },
    {
        text: "Train for perfection but aim for more",
        headingPosition: "left",
        position: "90%"
    },
    {
        text: "Take pride in your work but donot seek praise",
        headingPosition: "left",
        position: "100%"
    },
    {
        text: "temporary sacrifices brings lasting results",
        headingPosition: "left",
        position: "100%"
    },
    {
        position: "110%"
    }
]


let i = 0
let previousButton = document.querySelector(".previous")
let nextButton = document.querySelector(".next")
let slideNavigationbar = document.querySelector(".slides")

//for populating the navigation bar in the bottom left corner
data.forEach((item, index) => {
    let n = document.createElement('button')
    n.innerText = index
    n.addEventListener('click', () => updateSlide(index))
    slideNavigationbar.appendChild(n)
})

//for updating the slide and it take the index of the data array as the parameter
function updateSlide(current) {
    i = current
    document.querySelector("#quote").style.opacity = '0';
    document.querySelector(".main").style.backgroundPosition = data[current]?.position

    setTimeout(() => {
        document.querySelector("#quote").textContent = data[current]?.text
        document.querySelector('.heading-container').className = 'heading-container ' + data[current]?.headingPosition
        document.querySelector("#quote").style.opacity = '1';
    }, 900)

    data.forEach((item, index) => {
        if (current === index) {
            slideNavigationbar.childNodes[index].textContent = "-"
            slideNavigationbar.childNodes[index].className = "current"
            slideNavigationbar.childNodes[index].style.margin = '2px'
        }
        else {
            slideNavigationbar.childNodes[index].textContent = index
            slideNavigationbar.childNodes[index].className = ""
            slideNavigationbar.childNodes[index].style.margin = 0
        }
    })

    if (current === 0) previousButton.style.display = 'none'
    else previousButton.style.display = 'block'
    if (current === data.length - 1) {
        setTimeout(() => {
            nextButton.style.display = 'none'
            document.querySelector('.careers').style.opacity = 1
            document.querySelector('.careers').style.zIndex = 1
        }, 600)
    } else {
        document.querySelector('.careers').style.zIndex = -1
        nextButton.style.display = 'block'
        document.querySelector('.careers').style.opacity = 0
    }
}

updateSlide(i)

nextButton.addEventListener("click", () => {
    i < data.length - 1 && updateSlide(++i)
})

previousButton.addEventListener("click", () => {
    i && updateSlide(--i)
})