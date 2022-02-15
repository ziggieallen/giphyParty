const form = document.querySelector('#searchform');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const urls = [];
    const res = await axios.get("https://api.giphy.com/v1/gifs/search?", {
        params: {
            q: search.value,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    for (let url of res.data.data) {
        urls.push(res.data.data[0].images.original.url)
    }
    randomGif = urls[Math.floor(Math.random() * urls.length)]
    //supposed to randomly generate gifs from list of urls but is coming up with
    // the same gifs

    console.log(randomGif)
    nextGif = document.createElement('img')
    nextGif.setAttribute('src', `${randomGif}`)
    nextGif.classList.add('gifs')
    document.body.appendChild(nextGif)
    search.value = ''
   
});

const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    $('.gifs').remove()
})

