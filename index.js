function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div.target")
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  ranks.forEach( rank => { rank.innerHTML = parseInt(rank.innerHTML, 10) + n})
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}
