'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the amazing ${chalk.red(
          'generator-gql-template-ts'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'text',
        name: 'appName',
        message: 'What is the name of your app?',
        default: `${path.basename(path.resolve(process.cwd()))}`
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      `${this.templatePath()}/**/!(_)*`,
      this.destinationPath(),
      this.props
    );
    this.fs.copy(
      this.templatePath(`${this.templatePath()}/.*`),
      this.destinationRoot()
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      this.props
    );
  }

  install() {
    this.spawnCommandSync('git', ['init', '--quiet']);
    this.npmInstall();
  }
};
