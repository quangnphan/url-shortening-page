//bdca41baa756688abbac1f9406e97537a6bfd3e6
const input = document.querySelector('input');
const shortenBtn = document.querySelector('.shorten-btn');
const lists = document.querySelector('.results');
const error = document.querySelector('.form p');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav ul');

shortenBtn.addEventListener('click', shortenLink);

function shortenLink(e){
    const link = input.value;

    if(link === ''){
        error.style.display = "block";
        input.style.border = "2px solid hsl(0, 87%, 67%)";
    }else{
        error.style.display = "none";
        input.style.border = "none'"

        fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer bdca41baa756688abbac1f9406e97537a6bfd3e6',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({ "long_url": link, "domain": "bit.ly"})
        }).then(function(res){
        return res.json();
        }).then(function(data){
        createLink(data.id, link);
        }).catch(function(err){
        console.log(err);
      
        }) 
    }
    input.value = ''
    e.preventDefault();
}

function createLink(shortLink, inputLink){
    const listDiv = document.createElement('div');
    listDiv.classList.add('listDiv');
    const long = document.createElement('div');
    long.textContent = inputLink;
    long.classList.add('long');
    listDiv.appendChild(long)

    const short = document.createElement('div');
    short.textContent = shortLink;
    short.classList.add('short');
    listDiv.appendChild(short);

    const btn = document.createElement('button')
    btn.innerText = 'Copy';
    btn.classList.add('copy-btn');
    listDiv.appendChild(btn);

    lists.appendChild(listDiv)

    btn.addEventListener('click', e=>{
        btn.textContent = 'Copied!'
        copyLink(shortLink)
    })
}

//copy text
function copyLink(value){
    var item = document.createElement('input');
    item.value = value;
    document.body.appendChild(item);
    item.select();
    document.execCommand("copy");
    document.body.removeChild(item);
}


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('change');
    if(hamburger.classList.contains('change')){
        mobileNav.style.display = 'block';
    }else{
        mobileNav.style.display = 'none';
    }
})


  