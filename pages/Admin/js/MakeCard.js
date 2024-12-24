import { OpenModal } from "./MakeModalWindow.js";

export function MakeCard(data) {
    const parentDiv = document.querySelector('.cards');

    parentDiv.innerHTML = data.map((el , index) => (`
           <div class="card" id=${index}>
                <h1>название вуза: <span>${el.name}</span></h1>
                <h2>описание: <span>${el.web_pages[0]}</span></h2>
                <button class="card__btn" id=${index}>узнать подробности</button>
            </div>
        
        
        `)).join('');

        
        const card__btn = document.querySelectorAll('.card__btn');

        
        OpenModal(card__btn ,data)
}