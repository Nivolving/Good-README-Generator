function generateMarkdown(data) {
  return `
# Title
# ${data.title}
${generateBadges(data.license)}

## Description
${data.description}

# Table Of Contents
* [Title](Readme.md#title)
* [Description](Readme.md#description)
* [Installation](Readme.md#installation)

## Installation
${data.installation}
`;
}

function generateBadges( license ){
  return `
    [![${license} License](https://img.shields.io/badge/license-${license}-blue.svg)](http://www.gnu.org/licenses/${license}-3.0) 
  `;
}


module.exports = generateMarkdown;
