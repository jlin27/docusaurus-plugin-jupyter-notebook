module.exports = function() {
    return {
        name: 'jupyter-plugin',
        async loadContent() {
            console.log("This is a test jupyter plugin");
        }
    }
}
