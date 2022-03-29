const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// clearBtn.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
//card.addEventListener('mouseout', runEvent);

card.addEventListener('mousemove', runEvent);

//Event handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
}
