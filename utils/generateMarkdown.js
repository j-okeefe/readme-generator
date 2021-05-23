// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/static/v1?label=license&message=${license}&color=blue.svg)`
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache': return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU': return 'https://opensource.org/licenses/gpl-license';
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'Boost Software': return 'https://www.boost.org/users/license.html';
    case 'Creative Commons': return'https://creativecommons.org/about/cclicenses/';
    case 'Eclipse': return 'https://www.eclipse.org/org/documents/edl-v10.php';
    case 'Mozilla': return 'https://opensource.org/licenses/MPL-2.0';
    case 'The Unlicense': return 'https://opensource.org/licenses/Unlicense';
    case 'None': return'';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `This application is covered under ${license}. More information can be found by visiting [${license}](${renderLicenseLink(license)})`
  }else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributers](#Contributers)
  * [Testing](#Testing)
  * [License](#License)
  * [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contribution}

  ## Testing
  ${data.test}
  
  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  How to reach me with additional questions:
  * [Visit My GitHub](https://github.com/${data.github})
  * [Email Me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
