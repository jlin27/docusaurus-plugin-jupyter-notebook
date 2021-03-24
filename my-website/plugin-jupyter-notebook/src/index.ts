module.exports = function() {
    return {
        name: 'plugin-jupyter-notebook',
        async loadContent() {
            console.log("This is a test jupyter plugin");
        }
    }
}
