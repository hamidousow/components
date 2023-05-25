const btnAddCard = document.getElementById('btn-add-card');
let cards = document.getElementsByClassName('card')
let deleteBtn = document.querySelectorAll('.btn-delete')
const containerCards = document.getElementById('container-cards');

btnAddCard.addEventListener('click', () => {createCard()})
let idCard = 0;

function createCard() {
    idCard++
    containerCards.innerHTML += `
    <div id=${idCard} class="card" style="width: 100%;">
        <div class="card-item">${idCard}</div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build.</p>
            <button class="btn btn-danger btn-delete" onclick="deleteOneCard(event)">Supprimer</button>
        </div>
    </div>
    `        
}

function deleteOneCard(event) {
    let lui = event.target.parentNode.parentNode;
    containerCards.removeChild(lui)
}
