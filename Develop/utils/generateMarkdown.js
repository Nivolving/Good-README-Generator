function generateMarkdown(data) {
  return `
# Title
${data.title}

## Description
${data.description}

# Table Of Contents
* [Title](Readme.md#title)
* [Description](Readme.md#description)
* [Installation](Readme.md#installation)
* [Usage](Readme.md#contributing)
* [Badges](Readme.md#license)
* [Tests](Readme.md#tests)


## Installation
${data.installation}

## License
${generateBadges(data.license)}

## Contribution [![GitHub contributors](https://img.shields.io/github/contributors/cdnjs/cdnjs.svg?style=flat)](https://github.com/${data.username}/)
${data.contributing}

## Tests
${data.tests}

## Usage
${data.usage}

`;
}

function generateBadges(license) {  
  if (license !== "None")
  {    
    return `![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }  
return ''
}

module.exports = generateMarkdown;
