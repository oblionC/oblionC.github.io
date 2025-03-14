async function waitForFadeInRight() {
    const flowerDiv = document.getElementsByClassName("fade-in-to-right")[0]
    const img = flowerDiv.getElementsByTagName("img")[0]
    if(img.complete) {
        flowerDiv.classList.add("fade-right")
        flowerDiv.classList.remove("opacity-0")
    }
    else {
        img.onload = () => {
            flowerDiv.classList.add("fade-right")
            flowerDiv.classList.remove("opacity-0")
        }
    }
}

async function waitForFadeInLeft() {
    const flowerDiv = document.getElementsByClassName("fade-in-to-left")[0]
    const img = flowerDiv.getElementsByTagName("img")[0]
    if(img.complete) {
        flowerDiv.classList.add("fade-left")
        flowerDiv.classList.remove("opacity-0")
    }
    else {
        img.onload = () => {
            flowerDiv.classList.add("fade-left")
            flowerDiv.classList.remove("opacity-0")
        }
    }
}

async function lazyloadRight() {
    const imagesParentDiv = document.getElementsByClassName("lazyload-right")[0]
    const images = [...imagesParentDiv.children]
    for(var image of images) {
        image.classList.add("opacity-0")
    }
    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
    }
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const imgDiv = entry.target
                const img = imgDiv.getElementsByTagName("img")[0]
                if(img.complete) {
                    imgDiv.classList.add("fade-right")
                }
                else {
                    img.onload = () => {
                        imgDiv.classList.add("fade-right")
                    }
                }
                observer.unobserve(img);
            }
        })
    }, options)
    images.forEach(image => observer.observe(image))

}

async function lazyloadLeft() {
    const imagesParentDiv = document.getElementsByClassName("lazyload-left")[0]
    const images = [...imagesParentDiv.children]
    for(var image of images) {
        image.classList.add("opacity-0")
    }
    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
    }
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const imgDiv = entry.target
                const img = imgDiv.getElementsByTagName("img")[0]
                if(img.complete) {
                    imgDiv.classList.add("fade-left")
                }
                else {
                    img.onload = () => {
                        imgDiv.classList.add("fade-left")
                    }
                }
                observer.unobserve(img);
            }
        })
    }, options)
    images.forEach(image => observer.observe(image))

}

async function lazyload() {
    const imagesParentDiv = document.getElementsByClassName("lazyload")[0]
    const images = [...imagesParentDiv.children]
    for(var image of images) {
        image.classList.add("opacity-0")
    }
    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
    }
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const imgDiv = entry.target
                const img = imgDiv.getElementsByTagName("img")[0]
                if(img.complete) {
                    imgDiv.classList.add("fade-up")
                }
                else {
                    img.onload = () => {
                        imgDiv.classList.add("fade-up")
                    }
                }
                observer.unobserve(img);
            }
        })
    }, options)
    images.forEach(image => observer.observe(image))
}

lazyload()
lazyloadLeft()
lazyloadRight()
waitForFadeInRight()
waitForFadeInLeft()