

/**
 * @param button should take an event listener and do something, maybe call the api.
 * @param 
 * @param imagewrapper should get an image appended to it after the api is called.
 * 
 */
const button = document.querySelector('.search-btn')

const DOMAIN = 'https://api.unsplash.com/photos/random/?client_id=fd29b8d9f2acaad52e28d2a051ad782b815bc5f97fca200e9f438a5cf37f4693';

button.addEventListener('click', async () => {
    let randomImageData = await axios.get(`${DOMAIN}`)
    const randomImage = randomImageData.data.urls.raw;
    generateImage(randomImage);
})


function generateImage(imageData) {//this is name of parameter. above, relevant argument happens to be called movieArray. we are hiring imagedata to stand in line like the person at apple
    const imageWrapper = document.querySelector('.image-wrapper')
    imageWrapper.innerHTML = `<img src = ${imageData}>`;
}


// command shift p will reformat the JS document for you. command + F will also do the same thing 
// for every brace, you indent by one tab


// Next, write a method renderList that receives an array of "movie" objects as a parameter. Call renderList from the event handler you wrote in the previous step and pass it the Search results from the axios response
// renderList should iterate over the movies it receives as an argument and insert the movie data from each object into the DOM as a new HTML element.
    //he said that if you didn't have a closure if it was written as such - button.addEventListener('click', function(), then JS would run the function on its own without the click. with the async closure, JS says ok will only run the function when the click happens.
    // we're waiting for a click
    //async is going to allow us to wait for the response to come to the API
    // const breed = breedInput.value;
    //let myDog = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(response => { //myDog and response are two separate variables here that do the same thing and get the same data 
    //     //let dogPic = response.data.message    
    //     const image = response.data.message; //goes to response key of object and then data key and then value of message
    //     imageDiv.innerHTML = `<img src = ${image}>`//throws casey into the div
        //console.log(response);
        //imageDiv.innerHTML = `<img src=${dogPic}>`;

        //
        //data is an object inside of response, search is the key of the value which is the arrayresponse is THE OBJECT, THE SEARCH IS THE ARRAY


