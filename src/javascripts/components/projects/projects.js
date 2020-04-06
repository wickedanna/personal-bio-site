import projectData from '../../helpers/data/projectData';

import utils from '../../helpers/utils';

// const createProjectCards = () => {
//   const projects = projectData.getProjects();
//   let domStr = '';
//   projects.forEach((project) => {
//     domStr += `
//     <div class="projectCard">
//     <header><h3>${project.title.toUpperCase()}</h3></header>
//     <img src=${project.screenshot}>
//     <p>${project.description}</p>
//     <p>${project.technologiesUsed}</p>
//     <footer class="project-links">
//     <a href="${project.url}">Link to Live Website</a>
//     <a href="${project.githubUrl}">Link to Github Repository</a>
//     </footer>
//     </div>'`;
//   });
//   utils.printToDom('projectsPage', domStr);
// };

const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domStr = '';
      projects.forEach((project) => {
        domStr += `
        <div class="projectCard">
        <header><h3>${project.title.toUpperCase()}</h3></header>
        <img src=${project.screenshot}>
        <p>${project.description}</p>
        <p>${project.technologiesUsed}</p>
        <footer class="project-links">
        <a href="${project.url}">Link to Live Website</a>
        <a href="${project.githubUrl}">Link to Github Repository</a>
        </footer>
        </div>'`;
      });
      utils.printToDom('projectsPage', domStr);
    })
    .catch((err) => console.error('get projects broke', err));
};

export default { createProjectCards };
