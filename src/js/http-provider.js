const chuckJokes = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'dsevmsmb';
const cloudUrl = 'https://api.cloudinary.com/v1_1/drc8ihmoo/upload';
/*
fetch(chuckJokes).then( resp => {
    resp.json().then( ( { id, value } ) => {
        console.log( id );
        console.log( value );
    } );
})
fetch( chuckJokes )
    .then( resp => resp.json() )
    .then( ( { id, value } ) => {
        console.log( id );
        console.log( value );
    } );
*/

const getJoke = async () => {
    try {
        const resp = await fetch( chuckJokes );

        if ( !resp.ok ) return alert( 'No se pudo realizar la peticion' );

        const { created_at, id, value } = await resp.json();

        return { created_at, id, value };
    } catch ( err ){
        throw err;
    }
}

const getUsers = async () => {

    const resp = await fetch( urlUsers );

    const { data: usuarios } = await resp.json();

    return usuarios;
};

const uploadFile = async ( fileToUpload ) => {

    const formData = new FormData();
    formData.append( 'upload_preset', cloudPreset );
    formData.append( 'file', fileToUpload );

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            return ( await resp.json() ).secure_url;
        } else {
            throw await resp.json();
        }
    } catch ( e ) {
        throw e;
    }


};

export {
    getJoke,
    getUsers,
    uploadFile
};
