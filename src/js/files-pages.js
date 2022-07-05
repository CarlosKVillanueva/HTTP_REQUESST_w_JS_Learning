import { uploadFile } from './http-provider';

const body = document.body;
let inputFile, imgFile;

const createInputFileHtml = () => {

    const html = `
        <h1 class="mt-5">Upload Files</h1>
        <hr>
        
        <label for=""> Select a file to Upload:</label>
        <input type="file" accept="image/png, image/jpeg"/>
        
        <hr>
        <img id="photo" alt="" src="" class="img-thumbnail" ">
        
    `
    const div = document.createElement( 'div' );
    div.innerHTML = html;
    body.append(div)

    inputFile = document.querySelector( 'input' );
    imgFile = document.querySelector( '#photo' );

};

const events = () => {
    inputFile.addEventListener( 'change', ( event ) => {
        const file = event.target.files[ 0 ];
        uploadFile( file ).then( url => imgFile.src = url );
    } );
};


export const init = () => {
    createInputFileHtml();
    events();
};