
const parent_div = document.querySelector('.modal');
let openModal = true ; 
const ModalWindow = (data) =>{
    if (!openModal) {
        openModal = true;
        parent_div.className = '.modal'
    }
    parent_div.innerHTML = `
    <div class="modal__bg"></div>
        <div class="modal__window">
            <div class="" style="display:flex; justify-content: right;">
                <img src="https://cdn-icons-png.flaticon.com/512/64/64498.png" alt="menu" class="closeModalWindow" style="width: 20px;"  >
            </div>
            <div class="" style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 20px;">
                <h1>Описание вуза</h1>
                <p>country: <span>${data.country}</span> </p>
                <p>name:  <span> ${data.name}</span> </p>
           
                <p>web_pages: <span> ${data.web_pages[0]}  </span> </p>
            </div>
        </div>
    `
    const modal__bg = document.querySelector('.modal__bg');
    const closeModalWindow = document.querySelector('.closeModalWindow');
    CloseModalWindow(modal__bg , closeModalWindow)
    

}

const CloseModalWindow = (modal__bg , closeModalWindow) =>{
    modal__bg.addEventListener('click' , () =>{
        if (openModal) {
            parent_div.className += ` none`
            openModal= false
        }

        
    })
    closeModalWindow.addEventListener('click' , () =>{
        if (openModal) {
            parent_div.className += ` none`;
            openModal= false
        }
  

        
    })
}

export const OpenModal = (parentDiv = null , data = null) =>{
  /*   console.log(parentDiv);
    console.log(data); */
    parentDiv.forEach(element => {
        element.addEventListener('click', ()=>{
            console.log(element);
          
         
            ModalWindow(data[element.id])
            
        })
    });
    
}