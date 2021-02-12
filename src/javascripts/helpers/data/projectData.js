import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDevProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/devProjects.json`)
    .then((response) => {
      const allProjects = response.data;
      const projects = [];
      if (allProjects) {
        Object.keys(allProjects).forEach((projectId) => {
          allProjects[projectId].id = projectId;
          projects.push(allProjects[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});

const getDesignProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/designProjects.json`)
    .then((response) => {
      const allProjects = response.data;
      const projects = [];
      if (allProjects) {
        Object.keys(allProjects).forEach((projectId) => {
          allProjects[projectId].id = projectId;
          projects.push(allProjects[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getDevProjects, getDesignProjects };
