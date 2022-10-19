function processForm(e) {
    e.preventDefault();
    console.log(e);

    //store the thibng that was typed
    const tweet = document.getElementById('tweet');
    if(tweet.value =="") return false;
    //show the tweet in our timeline
    const ul = document.getElementById('timeline');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(tweet.value));
    ul.appendChild(li);
    tweet.value = ""
    return false;
}

const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);