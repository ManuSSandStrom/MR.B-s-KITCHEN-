<script>
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle Fix
    function toggleMenu() {
        document.getElementById("nav-menu").classList.toggle("active");
    }

    // Fix Menu Toggle Button
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link (on mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    // Smooth Scrolling to Sections
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add Scroll Animation to Sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });

    // Highlight Active Section in Navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Function to Add New Menu Items Dynamically
    function addMenuItem(name, price, imgSrc) {
        const menuList = document.querySelector(".menu-list");
        const newItem = document.createElement("div");
        newItem.classList.add("menu-item");

        newItem.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <input type="text" value="${name}" readonly>
            <input type="text" value="₹${price}" readonly>
        `;

        menuList.appendChild(newItem);
    }

    // Show Menu Items with Fade-in Animation
    const menuItems = document.querySelectorAll(".menu-item, .special-item, .sweets-item, .juice-item");
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 200);
    });

    console.log("MR.B'S KITCHEN Website Loaded Successfully! 🚀");
});

// Fade-in effect for menu sections
document.addEventListener("DOMContentLoaded", function () {
    const menuSections = document.querySelectorAll(".veg-menu, .nonveg-menu");

    menuSections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });
});
</script>
