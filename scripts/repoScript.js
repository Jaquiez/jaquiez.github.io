async function getRepos()
{
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
  return repos;
}
//BAD CODE BAD CODE BAD CODE BAD CODE BAD CODE BAD CODE
//
async function doGeneral()
{
  (await getRepos()).forEach((val,key) =>
    {
      var div = document.getElementById("projects")
      var divContainer = document.createElement("div")
      divContainer.id = "project";
      //Add name/link to list item using an anchor attribute
      var li = document.createElement("li")
      var node = document.createTextNode(key)
      var a = document.createElement('a')
      a.title = key
      a.href = val.url
      a.appendChild(node)
      li.appendChild(a)
      divContainer.appendChild(li)
      div.appendChild(divContainer)
      //Add description in another list item
      li = document.createElement("li")
      node = document.createTextNode(val.description)
      li.appendChild(node)
      divContainer.appendChild(li)  
      div.appendChild(divContainer)
    }
  )
}

doGeneral();