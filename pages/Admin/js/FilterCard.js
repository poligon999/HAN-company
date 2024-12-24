import { MakeCard } from "./MakeCard.js"

export function HandleFilterData(data) {
    
    document.querySelector('.search').addEventListener('submit', (event)=>{
        event.preventDefault()
        /* полное вхождение */
      /*   const updateData = data.filter((el) => el.name.toLocaleLowerCase() === document.querySelector('.inputSearch').value.trim().toLocaleLowerCase()) */
    /* частичное вхождение */
    const updateData = data.filter((el) => el.name.toLocaleLowerCase().includes(document.querySelector('.inputSearch').value.trim().toLocaleLowerCase()) )
        MakeCard(updateData)
    })
    }