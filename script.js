/* =========================================================
   AURA — PROJECT 07
   INTERACTION ENGINE
========================================================= */


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {

  cursorDot.style.left = event.clientX + "px";
  cursorDot.style.top = event.clientY + "px";

  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";

});


/* =========================================================
   CONSTELLATION TOOLTIP
========================================================= */

const constellation = document.getElementById("constellation");

const tooltip = document.getElementById("nodeTooltip");

const tooltipTitle =
  document.getElementById("tooltipTitle");

const tooltipMeta =
  document.getElementById("tooltipMeta");


const nodes =
  document.querySelectorAll(".constellation-node");


nodes.forEach((node) => {

  node.addEventListener("mouseenter", () => {

    tooltip.style.display = "block";

    tooltipTitle.textContent =
      node.dataset.title;

    tooltipMeta.textContent =
      node.dataset.meta;

  });


  node.addEventListener("mousemove", (event) => {

    const rect =
      constellation.getBoundingClientRect();

    tooltip.style.left =
      event.clientX - rect.left + 18 + "px";

    tooltip.style.top =
      event.clientY - rect.top - 15 + "px";

  });


  node.addEventListener("mouseleave", () => {

    tooltip.style.display = "none";

  });


  node.addEventListener("click", () => {

    const target =
      document.getElementById("universe");

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


/* =========================================================
   OPPORTUNITIES
========================================================= */

const opportunities = [

  {
    title: "AI Futures Lab",
    category: "Technology · Build",
    filter: "build",
    location: "Lahore · 12 days left",
    icon: "⌁",
    description:
      "Build a prototype around a real-world problem with other curious minds."
  },

  {
    title: "Global Youth Summit",
    category: "Global · Leadership",
    filter: "travel",
    location: "Istanbul · 21 days left",
    icon: "✦",
    description:
      "Meet young leaders from around the world and exchange ideas that travel."
  },

  {
    title: "Young Voices MUN",
    category: "MUN · Debate",
    filter: "people",
    location: "Islamabad · 6 days left",
    icon: "◌",
    description:
      "Step into a room full of questions, diplomacy and unexpected alliances."
  },

  {
    title: "Creative Cities",
    category: "Design · Culture",
    filter: "learn",
    location: "Online · 9 days left",
    icon: "◈",
    description:
      "Explore how design can change the way people experience a city."
  },

  {
    title: "Climate Innovation Challenge",
    category: "Competition · Impact",
    filter: "impact",
    location: "Global · 28 days left",
    icon: "❋",
    description:
      "Turn a climate problem into an idea worth testing."
  },

  {
    title: "Future Founders",
    category: "Entrepreneurship",
    filter: "build",
    location: "Karachi · 14 days left",
    icon: "↗",
    description:
      "A compact founder lab for ideas that deserve to become real."
  },

  {
    title: "Women in Tech Forum",
    category: "Technology · Community",
    filter: "people",
    location: "Online · 17 days left",
    icon: "○",
    description:
      "A room for builders, beginners and ambitious questions."
  },

  {
    title: "Youth Policy Fellowship",
    category: "Policy · Fellowship",
    filter: "impact",
    location: "Islamabad · 31 days left",
    icon: "§",
    description:
      "Learn how ideas become policy — and how young voices enter the room."
  },

  {
    title: "Open Studio Workshop",
    category: "Creative · Learn",
    filter: "learn",
    location: "Lahore · 4 days left",
    icon: "✎",
    description:
      "Make something imperfect, interesting and completely your own."
  }

];


const opportunityGrid =
  document.getElementById("opportunityGrid");


function renderOpportunities(filter = "all") {

  const filtered =
    opportunities.filter((item) => {

      return (
        filter === "all" ||
        item.filter === filter
      );

    });


  opportunityGrid.innerHTML =
    filtered.map((item) => {

      return `

        <article class="opportunity-card">

          <div class="card-top">

            <span class="card-category">
              ${item.category}
            </span>

            <span class="card-icon">
              ${item.icon}
            </span>

          </div>


          <div>

            <h3>
              ${item.title}
            </h3>

            <p>
              ${item.description}
            </p>

          </div>


          <div class="card-bottom">

            <span>
              ${item.location}
            </span>

            <span class="card-arrow">
              ↗
            </span>

          </div>

        </article>

      `;

    }).join("");

}


renderOpportunities();


/* =========================================================
   FILTERS
========================================================= */

const filters =
  document.querySelectorAll(".filter");


filters.forEach((filterButton) => {

  filterButton.addEventListener("click", () => {

    filters.forEach((button) => {

      button.classList.remove("active");

    });


    filterButton.classList.add("active");


    renderOpportunities(
      filterButton.dataset.filter
    );

  });

});


/* =========================================================
   SERENDIPITY ENGINE
========================================================= */

const surprises = [

  {
    title: "Open Studio Workshop",
    meta: "Creative · Lahore · 4 days left",
    reason:
      "You keep exploring ideas. Maybe it's time to make one tangible."
  },

  {
    title: "Global Youth Summit",
    meta: "Leadership · Istanbul · 21 days left",
    reason:
      "Your curiosity has a global shape. This one puts it in a room."
  },

  {
    title: "Climate Innovation Challenge",
    meta: "Impact · Global · 28 days left",
    reason:
      "You don't need to be an expert to start solving interesting problems."
  },

  {
    title: "AI Futures Lab",
    meta: "Technology · Lahore · 12 days left",
    reason:
      "A small experiment could become the beginning of a much bigger skill."
  },

  {
    title: "Youth Policy Fellowship",
    meta: "Policy · Islamabad · 31 days left",
    reason:
      "Some rooms are built for voices that aren't afraid to ask better questions."
  }

];


const revealButton =
  document.getElementById("surpriseButton");


const revealCard =
  document.getElementById("revealCard");


const revealTitle =
  document.getElementById("revealTitle");


const revealMeta =
  document.getElementById("revealMeta");


const revealReason =
  document.getElementById("revealReason");


const serendipityDescription =
  document.getElementById("serendipityDescription");


function revealSurprise() {

  const random =
    surprises[
      Math.floor(
        Math.random() * surprises.length
      )
    ];


  revealCard.classList.remove("revealed");


  revealCard.style.opacity = "0";
  revealCard.style.transform =
    "translateY(15px) rotate(0deg)";


  setTimeout(() => {

    revealTitle.textContent =
      random.title;

    revealMeta.textContent =
      random.meta;

    revealReason.textContent =
      random.reason;

    revealCard.style.opacity = "1";

    revealCard.classList.add("revealed");

    serendipityDescription.textContent =
      "Something unexpected just crossed your path.";

  }, 250);

}


revealButton.addEventListener(
  "click",
  revealSurprise
);


/* HERO SURPRISE */

const heroSurprise =
  document.getElementById("heroSurprise");


const navSurprise =
  document.getElementById("navSurprise");


function goToSurprise() {

  document
    .getElementById("surprise")
    .scrollIntoView({
      behavior: "smooth"
    });


  setTimeout(
    revealSurprise,
    700
  );

}


heroSurprise.addEventListener(
  "click",
  goToSurprise
);


navSurprise.addEventListener(
  "click",
  goToSurprise
);


/* =========================================================
   YOUR AURA
========================================================= */

const auraButton =
  document.getElementById("auraButton");


const auraTitle =
  document.getElementById("auraTitle");


const auraTypes = [

  "THE<br>EXPLORER",

  "THE<br>BUILDER",

  "THE<br>CONNECTOR",

  "THE<br>CATALYST"

];


let auraIndex = 0;


auraButton.addEventListener("click", () => {

  auraIndex++;

  if (auraIndex >= auraTypes.length) {

    auraIndex = 0;

  }


  auraTitle.style.opacity = "0";


  setTimeout(() => {

    auraTitle.innerHTML =
      auraTypes[auraIndex];

    auraTitle.style.opacity = "1";

  }, 200);

});


/* =========================================================
   CARD MAGNETIC EFFECT
========================================================= */

document.addEventListener(
  "mousemove",
  (event) => {

    const cards =
      document.querySelectorAll(
        ".opportunity-card"
      );


    cards.forEach((card) => {

      const rect =
        card.getBoundingClientRect();


      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      if (
        x >= 0 &&
        x <= rect.width &&
        y >= 0 &&
        y <= rect.height
      ) {

        const rotateX =
          (y / rect.height - 0.5) * -3;

        const rotateY =
          (x / rect.width - 0.5) * 3;


        card.style.transform =
          `translateY(-8px)
           perspective(700px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)`;

      } else {

        card.style.transform = "";

      }

    });

  }
);


/* =========================================================
   INTERSECTION ANIMATION
========================================================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(
    ".statement-section, .universe-section, .serendipity-section, .aura-section, .final-section"
  )
  .forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
      "translateY(30px)";

    section.style.transition =
      "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

  });


/* =========================================================
   AURA CORE PARALLAX
========================================================= */

const constellationElement =
  document.getElementById("constellation");


const auraCore =
  document.querySelector(".constellation .aura-core");


const orbitElements =
  document.querySelectorAll(
    ".constellation .orbit"
  );


const isTouchDevice =
  window.matchMedia(
    "(pointer: coarse)"
  ).matches;


if (!isTouchDevice) {

  constellationElement.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        constellationElement.getBoundingClientRect();


      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;


      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;


      const moveX =
        (x - centerX) / 30;

      const moveY =
        (y - centerY) / 30;


      auraCore.style.marginLeft =
        `${moveX}px`;

      auraCore.style.marginTop =
        `${moveY}px`;


      orbitElements.forEach(
        (orbit, index) => {

          const amount =
            (index + 1) * 0.6;

          orbit.style.marginLeft =
            `${moveX * amount}px`;

          orbit.style.marginTop =
            `${moveY * amount}px`;

        }
      );

    }
  );


  constellationElement.addEventListener(
    "mouseleave",
    () => {

      auraCore.style.marginLeft = "0";
      auraCore.style.marginTop = "0";

      orbitElements.forEach(
        (orbit) => {

          orbit.style.marginLeft = "0";
          orbit.style.marginTop = "0";

        }
      );

    }
  );

}


/* =========================================================
   BUTTON RIPPLE
========================================================= */

document
  .querySelectorAll(
    ".button-primary, .outline-button"
  )
  .forEach((button) => {

    button.addEventListener(
      "click",
      function () {

        this.style.transform =
          "scale(0.97)";

        setTimeout(() => {

          this.style.transform = "";

        }, 120);

      }
    );

  });
