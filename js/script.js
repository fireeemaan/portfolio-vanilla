document.addEventListener("DOMContentLoaded", () => {
   fetch("projects.json")
      .then((response) => response.json())
      .then((projects) => {
         const container = document.querySelector(".project-list");

         container.innerHTML = "";

         projects.forEach((project) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const techIcon = project.details.techStack
               .map(
                  (tech) =>
                     `<img src="https://skillicons.dev/icons?i=${tech.toLowerCase()}" alt="${tech}" />`
               )
               .join("");

            card.innerHTML = `<div class="card">
                     <img
                        src="${project.details.image}"
                        alt="Project Image"
                     />
                     <div class="card-content">
                        <div>
                           <h1 class="project-title">${project.details.title}</h1>
                           <p class="project-description">
                              ${project.details.description}
                           </p>
                        </div>
                        <div class="project-footer">
                           <a href="${project.details.github}">Source Code</a>
                           <div class="project-tech">
                              ${techIcon}
                           </div>
                        </div>
                     </div>
                  </div>`;

            container.appendChild(card);
         });
      });
});
