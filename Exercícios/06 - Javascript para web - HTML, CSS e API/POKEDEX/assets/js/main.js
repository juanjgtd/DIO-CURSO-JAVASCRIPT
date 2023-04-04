const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const modal = document.getElementById('modal')
const limit = 10
const maxRecords = 151
let offset = 0

function closeModal() {
    modal.innerHTML = ''
}

function showModal(offset, limit, idPokemon) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const modalPokemon = pokemons.filter(pokemon => pokemon.number === idPokemon)
        modal.innerHTML =  `
        <div class="modalContainer">
        <div class="modalContent ${modalPokemon[0].type}">
            <div class="pokemon modalHeader">
                <div class="modalTitle">
                    <span class="name">${modalPokemon[0].name}</span>    
                    <span class="number">#${modalPokemon[0].number}</span>
                </div>
                <div id="modalDetail" class="detail">
                    <ol id="modalTypes" class="types">
                        ${modalPokemon[0].types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
                <img class="modalImage" src="${modalPokemon[0].photo}" alt="${modalPokemon[0].name}">
            </div>

            <div class="modalBody">
                <div class="modalAbout">
                    <h2 class="f${modalPokemon[0].type}">About</h2>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Species</p>
                        <p class="">${modalPokemon[0].species}</p>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Height</p>
                        <p class="">${modalPokemon[0].height} cm</p>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Weight</p>
                        <p class="">${modalPokemon[0].weight} kg</p>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Abilities</p>
                        <ol id="modalAbilities">
                            ${modalPokemon[0].abilities.map((ability) => `<li class=".type .types">${ability}</li>`).join(',&nbsp')}
                        </ol>
                    </div>
                </div>
                <div class="modalAbout">
                    <h2 class="f${modalPokemon[0].type}">Base Stats</h2>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">HP</p>
                        <progress class="modalProgress" value=${modalPokemon[0].hp}  max="100"></progress>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Attack</p>
                        <progress class="modalProgress" value=${modalPokemon[0].attack}  max="100"></progress>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Defense</p>
                        <progress class="modalProgress" value=${modalPokemon[0].defense}  max="100"></progress>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Sp. Atk.</p>
                        <progress class="modalProgress" value=${modalPokemon[0].spatk}  max="100"></progress>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Sp. Def.</p>
                        <progress class="modalProgress" value=${modalPokemon[0].spdef}  max="100"></progress>
                    </div>
                    <div class="modalCharacteristic">
                        <p class="modalLabel f${modalPokemon[0].type}">Speed</p>
                        <progress class="modalProgress" value=${modalPokemon[0].speed}  max="100"></progress>
                    </div>
                </div>
                <div class="pagination">
                    <button type="button" onclick="closeModal()">
                        Voltar
                     </button>
                </div>
            </div>
        </div> 
        </div>
        `
    })
/* 
        */
}

function loadPokemonItens (offset, limit) {
   
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
        
                <img src="${pokemon.photo}" 
                    alt=${pokemon.name}>
                </div>
                <button class="modalButton" type="button" onclick="showModal(offset,limit,${pokemon.number})">+</button>         
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click',() => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
        
}) 






