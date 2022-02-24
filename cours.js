//* Event Listeners in react :
//*on utilise onClick (camelCase) dans l'élement ex:

<button onMouseOver={nomDeMaFonction}></button>

//*Cependant en utilisant des objets, des props par ex on ne peut pas update une variable, ou 
//*update un élément d'un objet simplement comme ça par ex :


//*Je veux récupérer une url au hasard de mes objets ou chaqu'un contient une url

function getUrl() {
    const maListeDeData = listeDeData.data.images
    const randomNB = Math.floor(Math.random() * maListeDeData.length)
    let url = maListeDeData[randomNB].url
}

//*Si j'execute cette fonction onClick elle ne fonctionnera pas

//*Pour ça on utilise le useState (modifier des objets) :

function AddElementToMyDOM () {
    const [things, setThings]  = React.useState(["Thing 1", "Thing 2"])
    //*This représente mon objet qui sera modifiable, setThings la fonction qui le modifiera
    //*La liste thing 1 et 2 représente la valeur de base elle pourrait aussi etre vide "" si on a pas
    //*besoin de valeur de base 

    function addItem() {
        const newThingsText = `Thing ${things.length + 1}` //*Ainsi nous avons Thing 3 puis 4 puis 5 etc
        setThings(prevThings => [...prevThings, newThingsText]) //*On a la liste des things et on push
        //*le nouveau élément ! [...] = La liste totale ou l'objet ENTIER
    }
}

//*En gros le state permet à React de se souvenir des valeurs d'un componenet l'état littéralement de 
//*celui ci avant après modif
//*Si on veut juste passer de la data vers un component (faire affichier une image, nom, prenom depuis
//*une data base) ON UTILISE DES PROPS
//*Si on veut que react se souvienne de l'état inital d'une valeur d'un component pour pouvoir la modifier
//*on utilise state
//*Les props sont immuables, les stats si.