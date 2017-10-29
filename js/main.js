const apiExamples = [
  {
    title: 'Mundial 2022',
    content: 'La Copa Mundial de la FIFA Rusia 2018 será la vigésima primera edición de la Copa Mundial de Fútbol.',
    img: '../assets/img/rusia.jpg'
  },
  {
    title: 'Cancún marzo 2017',
    content: 'Viaja a Cancún al Mejor Precio para 2 personas, 5 dias 3 noches en un hotel 3 estrellas',
    img: '../assets/img/cancun.jpg'
  },
  {
    title: 'Maestría en finanzas ULA ',
    content: 'MAestria de finanzas en la sede de la ULA, duración 2 años',
    img: '../assets/img/graduado.jpg'
  }
]

var loadPage = () => {
  //code for iterate Api responses of most reachables.
  var $reachableContainer = $("#reachables")

  var result = apiExamples.map((prize) =>{
  //  console.log(prize)
  var template = `<div class="col s4 m4">
                      <div class="card">
                        <div class="card-image">
                          <img src=${prize.img}>
                        </div>
                        <div class="card-content">
                          <span class="card-title">${prize.title}</span>
                          <p>${prize.content}</p>
                        </div>
                        <div class="card-action">
                          <button href="#">Busca más</button>
                        </div>
                      </div>`
    $reachableContainer.append(template)
  })
}

var nextLAnding = () => {
  $(document).href = "search.html"
}


$(document).ready(loadPage);
