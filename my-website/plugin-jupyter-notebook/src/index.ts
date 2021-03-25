/*
Plans for acutal plug-in:
- In index.ts
    - Get pluginOptions
        - runJupyter //Generate Jupyter notebook docs, true or false
        - docusaurusJupyterSubDir //Directory where the generated mdx pages go
        - jupyterDir //Where do the original .ipynb files live
    - Calls integrateJupyterDocs
- In integrateJupyterDocs.js
    - Load context and pluginOptions
- Calls
    - generateJupyterHtml
    - generateJupyterHtmlToJsx
    - moveJupyterJsxToMdx
*/

module.exports = function() {
    return {
        name: 'plugin-jupyter-notebook',
        async loadContent() {
            console.log("This is a test jupyter plugin");
        }
    }
}
