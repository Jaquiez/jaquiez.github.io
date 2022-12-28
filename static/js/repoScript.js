function getRepos()
{
  return new Promise(async (resolve,reject)=>{
    var html = await fetch("https://api.github.com/users/Jaquiez/repos");
    var jsonData = await html.json();
    const repos = new Map();
    jsonData.forEach(element => {
        const repoData = {
          url: element.html_url,
          description: element.description,
        }
        repos.set(element.name,repoData)
    });
    return resolve(repos);
  })

}
getRepos().then(obj =>{
  let projs = document.getElementById("projects");
  obj.forEach((ent,key)=>{
    let card = document.createElement("div");
    card.className = "card";
    let body = document.createElement("div");
    body.className = 'card-body';
    let title = document.createElement("h3");
    title.className = "card-title";
    title.innerText = key;
    let text = document.createElement("p");
    text.innerText =ent.description;
    let link = document.createElement("a");
    link.className = "card-link";
    link.innerText = ent.url;
    link.href = ent.url;
    [title,text,link].forEach((elem)=> body.appendChild(elem));
    card.appendChild(body);
    projs.appendChild(card);
  })
  Object.entries(obj).forEach(entry=>{


  })
});

