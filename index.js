// GAME HOVER SECTION

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
