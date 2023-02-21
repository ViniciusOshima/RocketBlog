// GAME HOVER SECTION

let GameHover = document.querySelector('#buttom-game-hover')

let GameButtom = document.querySelector('#buttom-game')

let GameEspaçoFora = document.querySelector('#bg-green')

GameButtom.addEventListener('mouseover', openGamePage)

GameEspaçoFora.addEventListener('mouseover', closeGamePage)

function openGamePage() {
  GameHover.setAttribute('class', 'answer-buttom')
  GameHover.innerHTML = `<div>
  <img src="./images/retro-game.jpg" alt="games" width= "225px">
</div>

<div class="answer-buttom-info">
  <h1>JOGUE AGORA</h1>
<ul>
  <li class="bg-li-1"><div class="bg-black">Problemas de Lógica</div> </li>
  <li class="bg-li-2"><div class="bg-black">Dark Stories</div> </li>
  <li class="bg-li-3"><div class="bg-black">Jogo da Velha</div> </li>
  <li class="bg-li-4"><div class="bg-black">Adivinhação</div> </li>
</ul>
</div>`
}

function closeGamePage() {
  GameHover.removeAttribute('class')
  GameHover.setAttribute('class', 'answer-buttom-none')
  GameHover.innerHTML = ' '
}

// ME HOVER SECTION

let MeHover = document.querySelector('#buttom-me')

MeHover.addEventListener('mouseover', openMePage)

function openMePage() {
  GameHover.setAttribute('class', 'answer-buttom')
  GameHover.innerHTML = `<div>
  <img src="./images/retro-game.jpg" alt="games" width= "225px">
</div>

<div class="answer-buttom-info">
  <h1>SOBRE MIM</h1>
<ul>
  <li class="bg-li-1">
    <div class="bg-black">
      <a href="https://github.com/ViniciusOshima">
          <img src="./images/github-white.png" alt="github-icon" width= "50px" />
      </a>
    </div>
  </li>

  <li class="bg-li-2">
    <div class="bg-black">
      <a href="https://www.instagram.com/vine.oshima/">
        <img src="./images/instagram-white.png" alt="instagram-icon" width= "50px" />
      </a>
    </div>
  </li>

  <li class="bg-li-3">
    <div class="bg-black">
      <a href="https://www.linkedin.com/feed/">
        <img src="./images/linkedin-white.png" alt="linkedin-icon" width= "50px" />
      </a>
    </div>
  </li>

  <li class="bg-li-4">
    <div class="bg-black">
      <a href="https://twitter.com/OshimaVine">
        <img src="./images/twitter-white.png" alt="twitter.github-icon" width= "50px" />
      </a>
    </div>
  </li>
</ul>
</div>`
}
