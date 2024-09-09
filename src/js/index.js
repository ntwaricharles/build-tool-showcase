import _ from 'lodash';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
// src/js/index.js
fetch('../assets/tools.json')  // Adjust path to go up to src and into assets
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const toolList = document.getElementById('tool-list');
    const toolsHtml = _.map(data.tools, tool => `<li>${tool.name}</li>`).join('');
    toolList.innerHTML = `<ul>${toolsHtml}</ul>`;
  })
  .catch(error => {
    console.error('Error fetching tools:', error);
  });

});
