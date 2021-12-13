import Search from "../Components/search";

function  capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

 export default function belongsToTheList(pokemon,searchTerm){
    return pokemon.includes(searchTerm); 
  }