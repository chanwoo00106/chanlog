const path = require('path')

/**
 *
 * @type {import('plop').PlopGenerator}
 */
const config = {
  description: 'Component Generator',
  prompts: [
    { type: 'input', name: 'name', message: 'component name :' },
    {
      type: 'input',
      name: 'location',
      message: 'Enter component location (start at "/src") :',
    },
  ],
  actions: (answers) => {
    const componentPath = path.join(process.cwd(), `/src/${answers.location}`)

    return [
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/index.tsx`,
        templateFile: 'generators/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/{{properCase name}}View.tsx`,
        templateFile: 'generators/component/view.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/index.stories.tsx`,
        templateFile: 'generators/component/view.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentPath}/{{properCase name}}/style.tsx`,
        templateFile: 'generators/component/style.ts.hbs',
      },
    ]
  },
}

module.exports = config
