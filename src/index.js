document.addEventListener('DOMContentLoaded', () => {
const URL = 'http://localhost:3000/dogs';

const fetchDogs = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(dogs => dogs.forEach(dog => renderDogs(dog) ))
}

//dogs.forEach(dog => console.log(dog))
fetchDogs();

function renderDogs(dog){
    
    const dogTable = document.querySelector('table');
    let dogId = dog.id 
    let dogTr = document.createElement('tr');
    dogTr.innerHTML = `<td>Dog ${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button id=${dog.id}>Edit</button></td> `
    dogTable.appendChild(dogTr);
    let button = document.getElementById(dog.id);
    button.addEventListener('click', (e) => {
        console.log(e.target)
        
        editDog(dog)
     })
}

function editDog(dog){
    
     let dogForm = document.getElementById('dog-form');
     
    dogForm.name.innerText = "${dog.name}";  
    // dogForm.breed.innerText = "hello"
    // dogForm.sex.innerText = "hello" ;
}
 
})