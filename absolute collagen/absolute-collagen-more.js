document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".grid-item");

    if (!("IntersectionObserver" in window)) {
        items.forEach(item => item.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    items.forEach(item => observer.observe(item));
});
