const buttonNo = document.getElementById('buttonNo')
const buttonYes = document.getElementById('buttonYes')
const imagen1 = document.getElementById('imagen1')
const imagen2 = document.getElementById('imagen2')

const handleActiveNo = () => {
	imagen1.classList.add('active')
	
	// Obtenemos el ancho y alto de la pantalla
	var screenWidth = window.innerWidth
	var screenHeight = window.innerHeight
	
	// Generamos coordenadas aleatorias dentro del rango de la pantalla
	var randomX = Math.floor(Math.random() * (screenWidth - buttonNo.offsetWidth))
	var randomY = Math.floor(Math.random() * (screenHeight - buttonNo.offsetHeight))
	
	// Asignamos las coordenadas al div contenedor
	buttonNo.style.left = randomX + 'px'
	buttonNo.style.top = randomY + 'px'
}

const handleActiveYes = () => {
	buttonNo.classList.add('hidden')
	buttonYes.classList.add('hidden')
	imagen2.classList.add('active')
	imagen1.classList.remove('active')
	setTimeout(() => {
		window.location.href = 'flowers.html'
	}, 1000)
}

buttonNo.addEventListener('mouseenter', handleActiveNo)

buttonNo.addEventListener('touchstart', handleActiveNo)
buttonNo.addEventListener('click', handleActiveNo)

buttonYes.addEventListener('click', handleActiveYes)
