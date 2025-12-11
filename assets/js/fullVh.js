function handleResize() {
    const height = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${height}px`)
}
document.addEventListener("resize", handleResize)
handleResize()