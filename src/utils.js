import Appbase from 'appbase-js';

const appbaseRef = new Appbase({
	url: "https://scalr.api.appbase.io",
	app: "openbook",
	credentials: "Tlt67c9PM:4ca76c0c-b1bb-4fd4-a675-68bead959b44"
})

const typeIndex = "books"
/*const person = {
    name: "Dulce Hernandez",
    user: "dulcehc",
    email: "dulce.hernandezc@gmail.com",
    city: "Iztapalapa"
}*/
const person = {
    name: "Leonardo Mendez",
    user: "leomdz",
    email: "lci.leornardom@gmail.com",
    city: "Tlalpan"
}

function generateID(){
    return Math.floor(Math.random()*100000)
}

function getDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }

    today = yyyy +'/'+mm+'/'+dd;
    return today;
}

export function upload(){
    console.log('calling upload function')
    /*
    let title = document.getElementById('inputTitle').value
    let autor = document.getElementById('inputAuthor').value
    let portada = document.getElementById('file1')
    let contraPortada = document.getElementById('file2')
    let date = getDate()

    let promesaPortada = new Promise((resolve, reject) => {
        let file = portada.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
            resolve(reader.result)
        }
        reader.readAsDataURL(file);
    });

    let promesaCP = new Promise((resolve, reject) => {
        let file = contraPortada.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
            resolve(reader.result)
        }
        reader.readAsDataURL(file);
    });
    
    Promise.all([promesaPortada, promesaCP])
    .then((values) => {
        console.log('Los valores son ', values)
        let jsonObject = {
            "owner": person.name,
            "user": person.user,
            "email": person.email,
            "location": person.city,
            "published": date,
            "title": title,
            "author": autor,
            "front": values[0],
            "back": values[1]       
        }
        add(jsonObject)
    })
    .catch((error) => {
        console.log(`ocurrió un error: ${error}`);
    });
    */

}

function add(jsonObject){
    appbaseRef.index({
        type: typeIndex,
        id: generateID(),
        body: jsonObject
    }).on('data', function(response) {
        console.log(`data: ${JSON.stringify(response)})`);
    }).on('error', function(error) {
        console.log(`error: ${error}`);
    })
}

function hola(){
    alert('hola mundo')
}