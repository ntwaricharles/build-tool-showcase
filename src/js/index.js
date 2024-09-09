import _ from 'lodash';
import '../styles/main.scss';

// Sample list of build tools
fetch('./tools.json')
  .then(response => response.json())
  .then(data => {
    const toolList = document.getElementById('tool-list');
    const toolsHtml = _.map(data.tools, tool => `<li>${tool.name}</li>`).join('');
    toolList.innerHTML = `<ul>${toolsHtml}</ul>`;
  });
