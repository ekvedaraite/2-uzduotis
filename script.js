const btn = document.getElementById('Btn')

let positionIndex = 0

btn.addEventListener('click', function() {
  const positions = [
    'translate(0, 0)',
    'translate(calc(100vw - 60px), 0)',
    'translate(calc(100vw - 60px), calc(100vh - 30px))',
    'translate(0, calc(100vh - 30px))',
  ];

  btn.style.transform = positions[positionIndex]

  positionIndex = (positionIndex + 1) % positions.length
})
