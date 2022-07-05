import { getJoke } from "./http-provider";


const body = document.body;
let btnJokes, olList;

const createJokesHtml = () => {
  const html = `
    <h1 class="mt-5 tex-center">Chuck Jokes</h1>
    <hr>
    <button class="btn btn-primary">Get Another Joke</button>
    
    <ul class="mt-2 list-group">
    </ul>
   `

    const divJokes = document.createElement( 'div' );
    divJokes.innerHTML = html;

    body.append( divJokes );
}


const eventos = () => {
    btnJokes = document.querySelector( "button" );
    olList = document.querySelector( "ul" );

    btnJokes.addEventListener( 'click', async () => {
        btnJokes.disabled = true;
        printJoke( await getJoke() );
        btnJokes.disabled = false;
    } );

}

const printJoke = ( { created_at, id, value } ) => {
    const olItem = document.createElement( 'li' );
    console.log({ created_at, id, value })
    olItem.innerHTML = `
                        <div class="card text-center">
                          <div class="card-header">
                              <img src="../src/assets/img/chuckApproved.png" alt="Chuck Approved" style="height: 100px">
                            
                          </div>
                          <div class="card-body">
                            <h5 class="card-title">${ id }</h5>
                            <p class="card-text">${ value }</p>
                          </div>
                          <div class="card-footer text-muted">
                            ${ new Date().toDateString() }
                          </div>
                        </div>
                        `;
    olItem.classList.add('list-group-item');
    olList.append( olItem );
};


export const init = () => {
    createJokesHtml();
    eventos();
}