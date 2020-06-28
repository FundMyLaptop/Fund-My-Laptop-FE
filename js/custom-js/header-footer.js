
let mod = document.getElementById('mod')

document.getElementById('ham').addEventListener('click', tog)

let toggle = true;
function tog(){
 if(toggle){
  mod.style.display = 'block'
 }
 if(toggle = !toggle){
  mod.style.display = 'none'
 }
}