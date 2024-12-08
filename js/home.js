var home = document.querySelector("#home");

var getObj = JSON.parse(   localStorage.getItem("users")   );

var cartona = "";
for (var i = 0; i < getObj.length; ++i) {
   cartona +=`
   <h1 >Welcome <span class=" text-info fw-bolder">${getObj[i].name}</span></h1>
   `
}
home.innerHTML = cartona;