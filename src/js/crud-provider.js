import * as url from "url";
import { raw } from "file-loader";

const urlCRUD = 'https://reqres.in/api/users';

const getUser = async ( id ) => {
    const resp = await fetch( `${ urlCRUD }/${ id }` );
    const { data } = await resp.json();
    return data;
};

const createUser = async ( user ) => {
    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-type': 'application/json'
        }
    } );
    return await resp.json()
};

const updateUser = async ( user, id ) => {
    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( user ),
        headers: {
            'Content-type': 'application/json'
        }
    } );
    return await resp.json()
};

const deleteUser = async ( id ) => {
    const resp = await fetch(`${urlCRUD}/${id}`,{
        method: 'DELETE'
    })
    return ( resp.ok ) ? "Borrado" : "No se pudo eliminar";
};

export {
    getUser,
    createUser,
    updateUser,
    deleteUser
};