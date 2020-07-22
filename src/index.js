document.addEventListener('DOMContentLoaded', () => {
const URL = 'http://localhost:3000/dogs/';

const fetchDogs = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(dogs => dogs.forEach(dog => renderDogs(dog) ))
}

fetchDogs();

function renderDogs(dog){
    
    const dogTable = document.querySelector('table');
    
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
    

    

    dogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = dogForm.name.value 
        const breed = dogForm.breed.value
        const sex = dogForm.sex.value 
         const bodyObject = {name, breed, sex}

        const options = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                },
                body: JSON.stringify(bodyObject)

        }



        fetch(URL + dog.id, options)
            .then(resp => resp.json())
            .then(renderDogs(dog) )  
        
     })

}
 
})