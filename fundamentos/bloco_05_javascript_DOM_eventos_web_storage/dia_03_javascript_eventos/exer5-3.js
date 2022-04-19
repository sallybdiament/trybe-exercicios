function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // Escreva seu código abaixo//

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let listaDia = document.createElement('li');

  function insertDays() {
    
    let daysNumbers = document.getElementById('days');
      for (let i = 0; i < dezDaysList.length; i += 1){
          let numeroDia = dezDaysList[i];
          listaDia.innerHTML = numeroDia;
          listaDia.className = 'day';
          daysNumbers.appendChild(listaDia);
      }
  }
  insertDays();

// function incluindoClasseFeriado (){
//     const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//     for (let i = 0; i < dezDaysList.length; i += 1){
//         if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
//         listaDia = dezDaysList[i];
//         listaDia.className += 'holiday';
//         console.log(listaDia);
//         }
//   }
// }
// incluindoClasseFeriado();
