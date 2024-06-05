
export function getAdat(vegpont, callback){
    fetch(vegpont)
  .then((response) => response.json())
  .then((data) => {
    callback(data)
    })
  .catch((error) => {
    console.log(error)
});

}

//callback fuggveny:
//aszinkron hivasoknal hasznaljuk, egy masik fuggveny parameterekent kapott fuggveny 

