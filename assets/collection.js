var cards = document.getElementsByClassName("collection-card");

for (var i = cards.length - 1; i >= 0; i--) {
  cards[i].addEventListener("mouseover", focus, false);
  cards[i].addEventListener("mouseout", unfocus, false);
};

function focus()
{
  console.log(this)
}

function unfocus()
{  

}