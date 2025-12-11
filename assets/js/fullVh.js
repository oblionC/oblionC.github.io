function handleResize() {
    const height = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${height}px`)
}
document.addEventListener("resize", handleResize)
handleResize()