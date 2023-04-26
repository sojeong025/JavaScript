const heading = document.querySelector('#heading');

function handleTitleClick() {
  if (heading.style.color === "blue") {
    heading.style.color = "red";
  } else{
    heading.style.color ="blue";
  }
}

heading.addEventListener('click', handleTitleClick)