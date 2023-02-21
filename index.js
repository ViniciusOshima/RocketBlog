let GameHover = document.querySelector('#buttom-game-hover')

let GameButtom = document.querySelector('#buttom-game')

GameButtom.addEventListener('mouseover', openGamePage)

function openGamePage() {
  GameHover.setAttribute('class', 'answer-buttom')
  GameHover.innerHTML = `<div>
  <img src="./images/retro-game.jpg" alt="games" width="225px">
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
