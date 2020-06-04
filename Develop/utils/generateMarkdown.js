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

## Contributing
${data.contributing}

## Tests
${data.tests}

`;
}

function generateBadges( license ){
  return `
    [![${license} License](https://img.shields.io/badge/license-${license}-blue.svg)](http://www.gnu.org/licenses/${license}-3.0)
  `;
}


module.exports = generateMarkdown;
