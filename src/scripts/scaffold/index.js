/*
  Component Scaffolding Script
  This is a script that enables scaffolding a new JSS component using `jss scaffold <componentname>`.
  Edit this script if you wish to use your own conventions for component storage in your JSS app.
*/

/* eslint-disable no-throw-literal,no-console */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const makeTemplate = require('./templates');
/*
  SCAFFOLDING SCRIPT
*/

const namingConvention = /[A-Z][A-Za-z0-9]+/;
const componentType = process.argv[2].toLowerCase();
const componentName = process.argv[3];
const validTypes = [
  'atom',
  'molecule',
  'organism',
  'template',
  'page'
]


function logUsage(){
  console.log(chalk`
  {bold Usage:   } npm run scaffold {green <componentType>} {blue <ComponentName>}`)
  console.log(chalk`
  {bold Example: } npm run scaffold {green Atom} {blue MyButton} `)
}

if (!componentType) {
  logUsage();
  throw chalk`{green <componentType>} was not passed`;
}

if (!componentName) {
  logUsage();
  throw chalk`{blue <ComponentName>} was not passed`;
}

if (!namingConvention.test(componentName)) {
  logUsage();
  throw chalk`
  {blue <ComponentName>} should start with an uppercase letter and contain only letters and numbers.
  `;
}

if(!validTypes.includes(componentType)){
  throw chalk`
  {green <componentType>} should be one of the following:
  ${validTypes.map(type => chalk.green(type)).join('\n  ')}
  `;
}

const componentRootPath = 'src/components';
const storyRootPath = 'src/components'

const componentOutputPath = scaffoldComponent();
const storyOutputPath = scaffoldStory();

console.log(chalk`
    Component & story for {blue ${componentName}} of type {green ${componentType}} has been scaffolded.
  `);
console.log(chalk`
    {bold Component located in:}
    {bold.green ${componentOutputPath}}
    {bold Story located in:}
    {bold.green ${storyOutputPath}}
`)

/*
  TEMPLATING FUNCTIONS
*/

function scaffoldComponent() {
  const template = makeTemplate.component(componentName, componentType);
  const outputDirectoryPath = `${componentRootPath}/${componentType}s/${componentName}`;
  const outputFilePath = path.join(outputDirectoryPath, `${componentName}.ts`);

  if(!fs.existsSync(outputDirectoryPath)){
    console.log(chalk`
    No directory yet for components of type {green ${componentType}}.
    Creating directory {green ${outputDirectoryPath}}`)
    fs.mkdirSync(outputDirectoryPath);
  }
  if (fs.existsSync(outputFilePath)) {
    throw chalk`
    Component {blue ${componentName}} of type {green ${componentType}} already exists. Not creating component.
    `;
  }

  fs.writeFileSync(outputFilePath, template, 'utf8');

  return outputFilePath;
}

function scaffoldStory(){
  const template = makeTemplate.story(componentName, componentType);
  const outputDirectoryPath = `${storyRootPath}/${componentType}s/${componentName}`;
  const outputFilePath = path.join(outputDirectoryPath, `${componentName}.stories.ts`);

  if(!fs.existsSync(outputDirectoryPath)){
    console.log(chalk`
    No directory yet for stories of type {green ${componentType}}.
    Creating directory {green ${outputDirectoryPath}}`)
    fs.mkdirSync(outputDirectoryPath);
  }
  if (fs.existsSync(outputFilePath)) {
    throw chalk`
    Story for {blue ${componentName}} of type {green ${componentType}} already exists. Not creating component.
    `;
  }

  fs.writeFileSync(outputFilePath, template, 'utf8');

  return outputFilePath;
}