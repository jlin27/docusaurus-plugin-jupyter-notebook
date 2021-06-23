# Jupyter Notebook Integration for Docusaurus

## Overview

**WARNING** This plugin is still a work in progress. The plugin architecture is not setup and the steps to convert the notebook to be browser-renderable are still manual. 

[Docusaurs 2](https://docusaurus.io/) supports a plugin architecture. This repo demonstrates the flow of a plugin that could be used to parse a [jupyter notebook](https://jupyter.org/) and seamlessly add it into Docusaurus site. Doing so provides a way for machine learning engineers to easily share their jupyter notebook tutorials on their website. 

This is how the plugin works:
* The plugin converts the notebook to html and renders that in the browser
    * Steps
        1. Convert .ipynb → html using nbconvert 
        2. Convert html → jsx using https://github.com/reactjs/react-magic/blob/master/README-htmltojsx.md
            * Web-based version https://magic.reactjs.net/htmltojsx.htm
        3. Add the converted jsx notebook as a component in a mdx doc page
            * [TestJupyterComponent.js](https://github.com/jlin27/docusaurus-plugin-jupyter-notebook/blob/main/my-website/src/pages/TestJupyterComponent.js) goes into [docs/jupyter.mdx](https://github.com/jlin27/docusaurus-plugin-jupyter-notebook/blob/main/my-website/docs/jupyter.mdx)



## How to use

To test this, 
```
git clone https://github.com/jlin27/docusaurus-plugin-jupyter-notebook
cd my-website
npm run typescript
yarn build
yarn start
```
Make sure you have all the [docusaurus installation](https://v2.docusaurus.io/docs/installation) setup.

To just test the plugin:
```
cd my-website/plugin-jupyter-notebook
npm run tsc // Runs Typescript compiler
```



 
