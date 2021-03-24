// Currently this is just a dummy plug-in. The following to be added in
// .ipynb -> .html via nbconvert
// .html -> .jsx via https://github.com/reactjs/react-magic/blob/master/README-htmltojsx.md
// Add the converted jsx notebook as a mdx component in a doc page


export function hello_world(name:string){
    console.log(`Hello ${name}`);
}
