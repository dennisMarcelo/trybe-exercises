function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

function pushDaysOfMonth () {
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
	let ulDays = document.getElementById("days");

	dezDaysList.forEach((e) => {
		let $li = document.createElement("li");
		$li.className = "day";
		
		if (e === 24 || e === 25 || e === 31) {
			$li.className += " holiday";	
		} 

		if( e === 4 || e === 11 || e === 18 || e === 25 ){
			$li.className += " friday";	
		}

		$li.innerText = e;
		ulDays.appendChild($li);
	})
}

function addBtnHoliday(feriados){
	let btnContainer = document.querySelector(".buttons-container");
	let dayHoliday = document.querySelectorAll(".holiday")
	let btnferiados = document.createElement("button");

	btnferiados.id = "btn-holiday";
	btnferiados.innerText = feriados;
	btnferiados.addEventListener("click", () => {
		if(dayHoliday[1].style.backgroundColor === "yellow") {
			dayHoliday.forEach(e => e.style.backgroundColor = "rgb(238,238,238)")
		} else {
			dayHoliday.forEach(e => e.style.backgroundColor = "yellow")
		}

	})

	btnContainer.appendChild(btnferiados)
}

function addBtnFriday(Friday){
	let btnContainer = document.querySelector(".buttons-container");
	let dayFriday = document.querySelectorAll(".friday");
	let btnFriday = document.createElement("button");
	let daysFriday = [4, 11, 18, 25];
	btnFriday.id = "btn-friday";
	btnFriday.innerText = Friday;
	btnFriday.addEventListener("click", () => {
		if(dayFriday[1].innerText === "Sextou \o/") {
			dayFriday.forEach((e, i) => {
				e.innerText = daysFriday[i];
			})
		} else {
			dayFriday.forEach(e => e.innerText = "Sextou \o/")
		}

	} )

	btnContainer.appendChild(btnFriday)
}

function zoomDay() {
	let days = document.querySelectorAll('.day');
	days.forEach((e) => {
		e.addEventListener('mouseover', (e) => {
			e.target.style.fontSize = "30px"
		})

	}, false)
}

function zooOutDay() {
	let days = document.querySelectorAll('.day');
	days.forEach((e)=> {
		e.addEventListener('mouseout', (e)=> {
			e.target.style.fontSize = "20px"
		})
	})
}

createDaysOfTheWeek();
pushDaysOfMonth();
addBtnHoliday("Feriados")
addBtnFriday("Sexta-feira")
zoomDay();
zooOutDay();
//Exercício 7:
// Escreva seu código abaixo.