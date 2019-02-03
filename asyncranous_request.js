

function createElemInDOM(){
  let h2 = document.createElement('h2');
  let ul = document.createElement('ul');
  let txtNode = document.createTextNode('Asynchronous request');
  h2.appendChild(txtNode);
  document.body.append(h2);
  ul.style.display = 'flex';
  document.body.append(ul);
  // call the sync operation
  getUrl('https://randomuser.me/api/?results=10');
}
createElemInDOM();



function getUrl(url){
  const div = document.querySelector('ul');
  div.innerHTML += `<div style="color:red">API: <p style="color:green">${url}</p></div>`;
  
  fetch(url)
  .then((response, reject) => {
    return response.ok ? response.json() : reject;
  })
    .then((res) => {
      const data = res.results;
      let myItem ='';
      data.map( (item, index) => {
      myItem += `<li>${item.name.first} ${item.name.last}<br> <img src=${item.picture.thumbnail} alt=${item.name.first}/></li>`;      
    });  
    div.innerHTML += myItem;
    })    
    .catch( (error) => {
    div.innerHTML += error;
  }); 
   
}


//getUrl('https://randomuser.me/api/eee'); 