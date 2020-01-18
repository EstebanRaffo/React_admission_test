// ================================================================
// ====           Declarando los elementos del HTML            ====
// ====             (Nada que hacer por aquí...)               ====
// ================================================================

const countriesUnorderedList = document.getElementById('countries');

const sortByPopulationButton = document.getElementById('sortByPopulation');
const sortByNameButton = document.getElementById('sortByName');

// ================================================================
// ====       TODO: Completar la función parseCountries        ====
// ====                                                        ====
// ====     La misma debe recorrer los hijos del elemento      ====
// ====    almacenado en countriesUnorderedList y retornar     ====
// ====    un arreglo de objectos con el siguiente formato     ====
// ====                                                        ====
// ====             [                                          ====
// ====               {                                        ====
// ====                 name: 'País de ejemplo',               ====
// ====                 population: 1000000,                   ====
// ====                 code: 'xx'                             ====
// ====               },                                       ====
// ====               ...                                      ====
// ====             ]                                          ====
// ====                                                        ====
// ====        Presta principal atención a que el valor        ====
// ====          almacenado en la propiedad population         ====
// ====           de cada objeto debe ser un número            ====
// ================================================================

function parseCountries() {
  let countries = [];

  // Completa aquí la lógica de la función...
  var items = countriesUnorderedList.children
 
  for(let i = 0; i < items.length; i++){
    var code = items[i].getAttribute('class')
    var datos = items[i].children
    var name = datos[0].innerHTML

    var populationString = datos[1].innerHTML
    var populationArray = populationString.split(".")
    var populationFiltered = ''
    populationArray.forEach(element => {
      populationFiltered += element
    });
    var population = parseInt(populationFiltered)
    
    var unPais = {
      name: name,
      population: population,
      code: code
    }
    
    countries.push(unPais)
  }

  return countries;
}


// ================================================================
// ====      TODO: Completar la función displayCountries       ====
// ====                                                        ====
// ====       La misma debe utilizar el arreglo recibido       ====
// ====     para reemplazar en el HTML el orden del listado    ====
// ====                                                        ====
// ====                                                        ====
// ====        Presta principal atención a que el valor        ====
// ====       de la poblacion se muestre tal como estaba       ====
// ====  al comienzo de la ejecución (con separador de miles)  ====
// ================================================================

function displayCountries(countries) {
  
  // Completa aquí la lógica de la función...
  
  var posicionDeLista = 0
  
  countries.forEach(unPais => {
    countriesUnorderedList.removeChild(countriesUnorderedList.childNodes[posicionDeLista])
    var unItem = document.createElement('li')
    unItem.setAttribute('class', unPais.code)
   
    var suNombre = document.createElement('span')
    suNombre.innerHTML = unPais.name
    
    var suPoblacion = document.createElement('strong')
    suPoblacion.innerHTML = convertirAString(unPais.population)

    posicionDeLista++
  });
}

function convertirAString(pob){
  var pobArray = pob.toString().split('')
  var pobAlReves = pobArray.reverse()
  
  var pobConPuntosAlReves = insertarPuntos(pobAlReves)
  var poblacion = pobConPuntosAlReves.reverse().toString()
  console.log(poblacion)
}

function insertarPuntos(pobAlReves){
  // var pobConPuntos = []
  var recorrer = 0

  for(let pos = 0; pos < pobAlReves.length;){
    while(recorrer != 3){
      recorrer++
    }
  
    var posAInsertar = recorrer + 1
    pobAlReves.splice(posAInsertar, 0, '.')
    pos = posAInsertar + 1
    recorrer = 0;
  }
 
  // for(let pos = 0; pos < pobAlReves.length; pos++){
  //   contador++
  //   if(contador == 3){
  //     pobConPuntos.push('.')
  //     contador = 0
  //   }  
  //   pobConPuntos.push(pobAlReves[pos])
  // }

  return pobAlReves
}

// ================================================================
// ====    TODO: Completar el funcionamiento de los botones    ====
// ====                                                        ====
// ====       Utilizando las funciones que desarrollaste       ====
// ====     anteriormente, los botones tienen como objetivo    ====
// ====   realizar efectivamente el ordenamiento de la lista   ====
// ================================================================

sortByPopulationButton.addEventListener('click', function () {
  let countries = parseCountries();

  // Completa aquí la lógica para ordenar por población (de mayor a menor) del arreglo countries

  displayCountries(countries);

  sortByNameButton.className = '';
  sortByPopulationButton.className = 'active';
});

sortByNameButton.addEventListener('click', function () {
  let countries = parseCountries();

  // Completa aquí la lógica para ordenar por nombre (alfabéticamente) del arreglo countries

  displayCountries(countries);

  sortByPopulationButton.className = '';
  sortByNameButton.className = 'active';
});
