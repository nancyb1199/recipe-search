console.log("working");


let mybutton = document.getElementById( "myButton" );
mybutton.addEventListener("click", myCallBack);


function myCallBack(){
  let searchString = document.getElementById('searchBox').value;
  pullRecipes(searchString);
}


function pullRecipes (newString) {
  console.log(newString);
  let url="http://recipepuppyproxy.herokuapp.com/api/?i=" + newString;
  let newArray=[];

  fetch(url)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
    response.json().then(function(data) {
      newArray=data.results;
      makeDisplay(newArray);
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

  function makeDisplay(newArray){
    for (i=0; i<newArray.length; i++){
      newBox = document.getElementById('container');
      let newItem = `
      <div id=box${i} class="box">
      <h3><a href="${newArray[i].href}"> ${newArray[i].title}</a></h3>
      <img src="${newArray[i].thumbnail}">
      </div>
      `
      newBox.innerHTML += newItem;

    }
  }

} //end pullRecipes
