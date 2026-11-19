
const MY_EMAIL = "nicolasgiovani.francisco@cvsu.edu.ph"; 

const projects = {
  royal: {
    title: "Royal Air",
    sub: "Under the AIC partnership",
    img: "images/royal-air.png",
    role: "Airline Worker",
    duration: "1 Year",
    tasks: [
      "Interior/External Cleaning",
      "Wheelchair Attendant",
      
    ],
    exp: "I have learned about the routine and workflow in airports."
  },
  psi: {
    title: "PSI Air",
    sub: "Philippine cargo airline and aviation training provider",
    img: "images/psi-air.jpg",
    role: "Airline Worker/Staff",
    duration: "1 Year",
    tasks: [
      "Interior/External Cleaning",
      "Wheelchair Attendant",
      "Ramp Agent"
    ],
    exp: "Collaborate effectively in the aviation industry."
  },
  skyjet: {
    title: "SkyJet",
    sub: "Philippine boutique and low-cost regional airline based in Manila",
    img: "images/skyjet.jpg",
    role: "Airline Worker/Staff",
    duration: "2 years",
    tasks: [
      "External/Internal Cleaning",
      "Wheelchair Attendant",
      "Ramp Agent",
      "Baggage Handler"
    ],
    exp: "Positive impact on company growth and success."
  },
  cebu: {
    title: "Cebu Pacific",
    sub: "Asia's first low-cost carrier and the largest Philippine airline by fleet size and passenger volume",
    img: "images/cebu-pacific.jpg",
    role: "Airline Staff/Worker",
    duration: "1 Year",
    tasks: [
      "External/Internal Cleaning",
      "Wheelchair Attendant",
      "Baggage Handler"
    ],
    exp: "Communication and customer service to make good contribution to the company growth."
  }
};


const certs = {
  netsec: {
    title: "Networking and Data Security",
    sub: "Certificate of Participation \u00b7 1 hr 30 min online webinar via Google Meet \u00b7 September 16, 2026 \u00b7 Ethel Programming Computer Programming Services",
    img: "images/cert-networking-data-security.png"
  },
  comptia: {
    title: "Next-Gen Networkers: CompTIA Network and Security",
    sub: "Certificate of Appreciation \u00b7 1 hr online webinar via Google Meet \u00b7 September 18, 2026 \u00b7 Ethel Programming Computer Programming Services",
    img: "images/cert-comptia-network-security.png"
  }
};

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("section[id]");
const links = navLinks.querySelectorAll("a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

const modal = document.getElementById("detailsModal");

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const p = projects[button.dataset.project];

    document.getElementById("modalImg").src = p.img;
    document.getElementById("modalImg").alt = p.title;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalSub").textContent = p.sub;
    document.getElementById("modalRole").textContent = p.role;
    document.getElementById("modalDuration").textContent = p.duration;
    document.getElementById("modalExp").textContent = p.exp;

    const list = document.getElementById("modalTasks");
    list.innerHTML = "";
    p.tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
    });

    modal.showModal();
  });
});

const certModal = document.getElementById("certModal");
document.querySelectorAll("[data-cert]").forEach(button => {
  button.addEventListener("click", () => {
    const c = certs[button.dataset.cert];
    document.getElementById("certImg").src = c.img;
    document.getElementById("certImg").alt = c.title + " certificate";
    document.getElementById("certTitle").textContent = c.title;
    document.getElementById("certSub").textContent = c.sub;
    certModal.showModal();
  });
});
document.getElementById("closeCert").addEventListener("click", () => certModal.close());
certModal.addEventListener("click", event => {
  if (event.target === certModal) certModal.close();
});

document.getElementById("closeModal").addEventListener("click", () => modal.close());


modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});


document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = "Portfolio message from " + name;
  const body = message + "\n\nFrom: " + name + " (" + email + ")";

  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=" + encodeURIComponent(MY_EMAIL) +
    "&su=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  window.open(gmailUrl, "_blank");
  document.getElementById("formNote").textContent = "Gmail opened in a new tab. Press Send there to finish.";
});



const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const nav = document.querySelector(".nav");
const bar = document.createElement("div");
bar.className = "progress";
document.body.appendChild(bar);
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (window.scrollY / max * 100) + "%";
}, { passive: true });

if (!reduce) {
 
  const typed = document.getElementById("typed");
  const roles = ["Airlines Services Department", "Ramp Agent", "Wheelchair Attendant", "Baggage Handler", "BSIT Student"];
  let r = 0, c = roles[0].length, del = true;
  setInterval(() => {
    const word = roles[r];
    c += del ? -1 : 1;
    typed.textContent = word.slice(0, c);
    if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
    else if (!del && c === roles[r].length) { del = true; c = roles[r].length; }
  }, 90);


  const hero = document.querySelector(".hero");
  const win = document.querySelector(".window");
  hero.addEventListener("pointermove", e => {
    const b = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", (e.clientX - b.left) + "px");
    hero.style.setProperty("--my", (e.clientY - b.top) + "px");
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    win.style.transform = "perspective(800px) rotateY(" + x * 8 + "deg) rotateX(" + -y * 8 + "deg)";
  });
  hero.addEventListener("pointerleave", () => { win.style.transform = ""; });

 
  const targets = document.querySelectorAll(".about-grid > *, .stats > *, .section-note, .projects h2, .log-row, .sub-head, .contact-box");
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = (i % 4) * 90 + "ms";
    io.observe(el);
  });
}


const counters = document.querySelectorAll("[data-count]");
const co = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count;
    co.unobserve(el);
    if (reduce) { el.textContent = end; return; }
    let n = 0;
    const t = setInterval(() => { el.textContent = ++n; if (n >= end) clearInterval(t); }, 220);
  });
}, { threshold: 0.6 });
counters.forEach(el => co.observe(el));
