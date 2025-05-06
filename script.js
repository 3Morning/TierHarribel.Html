const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            myObserver.unobserve(entry.target)
        }
        else {
            entry.target.classList.remove("show")
        }
    })

})

const elements = document.querySelectorAll(".")

elements.forEach((element) => myObserver.observe(element))