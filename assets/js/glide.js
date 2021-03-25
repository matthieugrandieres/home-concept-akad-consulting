if (window.innerWidth < 991) {
    let glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 1,
        perView: 1,
        autoplay:2000,
        hoverpause: true,
        animationTimingFunc: "linear",
        animationDuration: 800
    })

    glide.mount();

} else {
        let glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 1,
        perView: 3,
        autoplay:2000,
        hoverpause: true,
        animationTimingFunc: "linear",
        animationDuration: 800
    })

    glide.mount();
}
