import { getUsers } from "./http-provider";


const body  = document.body;
let tbody;
let next = 1;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5 mb-5 text-center"> Users</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tbody = document.querySelector( 'tbody' );
}

const crearFilaUsuario = ( { email, first_name, last_name, avatar } ) => {

    next++;

    const html = `
        <td scope="col"> ${ next } </td>
        <td scope="col"> ${ email } </td>
        <td scope="col"> ${ first_name } ${ last_name }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${ avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.append( tr );
}


export const init = async() => {

    crearHtml();
    ( await getUsers() ).forEach( crearFilaUsuario );

}

