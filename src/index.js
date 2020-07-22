document.addEventListener('DOMContentLoaded', () => {
const URL = 'http://localhost:3000/dogs/';

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
        
        
        editDog(dog)
     })
}

function editDog(dog){
    
     let dogForm = document.getElementById('dog-form');
     
    dogForm.name.value = dog.name;  
    dogForm.breed.value = dog.breed;
    dogForm.sex.value = dog.sex ;
    let top = dog.id;
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const options = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                },
                body: JSON.stringify({
                    name: dogForm.name.value,
                    breed: dogForm.breed.value,
                    sex: dogForm.sex.value,
                })

        }



        fetch(URL + top, options)
            .then(resp => resp.json())
            .then(dogs =>  renderDogs(dogs) )  
        
     })

}
 
})