async function searchPokemon(){
    console.log("searchPokemon function called")

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();     // incase someone types in all uppercase

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch response!!!");
        }

        const data = await response.json();
        console.log(data);
        
        // 1. get sprite
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";



        const imgElement2 = document.getElementById("");



        // 2. get audio
        const pokemonAudioUrl = data.cries.latest;
        const audioElement = document.querySelector("audio"); // Targets the parent audio tag

        audioElement.src = pokemonAudioUrl; // Set the src directly on the audio element
        audioElement.load(); // Forces the player to load the new file

        // 3. get moves
        const moves = data.moves;

        const moveSelects = [
            document.getElementById("move1"),
            document.getElementById("move2"),
            document.getElementById("move3"),
            document.getElementById("move4"),
        ];

        // look through each dropdown to fill
        moveSelects.forEach(select => {
            // clear existing options
            select.innerHTML = '';

            const defaultOption = document.createElement("option");
            defaultOption.text = "--- Select a move ---";
            select.appendChild(defaultOption);

            moves.forEach(moveEntry => {
                const option = document.createElement("option");
                option.text = moveEntry.move.name;
                select.appendChild(option);
            });
        });



    }
    catch(error){
        console.error(error);
    }

}



function addToTeam(){
    const teamList = document.getElementById("team");

    // get data of pokemon
    const pokemonSrc = document.getElementById("pokemonSprite").src;
    const move1 = document.getElementById("move1").value;
    const move2 = document.getElementById("move2").value;
    const move3 = document.getElementById("move3").value;
    const move4 = document.getElementById("move4").value;

    // create container for team member
    const article = document.createElement("article");
    article.classList.add("member");

    // add html
    article.innerHTML = `
        <img src="${pokemonSrc}" alt="pokemon team member">
        <ul>
            <li>${move1}</li>
            <li>${move2}</li>
            <li>${move3}</li>
            <li>${move4}</li>
        </ul>
    `

    // add to team list
    teamList.appendChild(article);
    

    
}