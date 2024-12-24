import { HandleFilterData } from "./FilterCard.js";
import { MakeCard } from "./MakeCard.js";

const URLS = ``;

export const GetData = async () =>{

    try {
        const {data} = await axios.get(URLS);
        // console.log(data);
        MakeCard(data)
        HandleFilterData(data)
    } catch (error) {
        console.error(error);
        
    }
}

