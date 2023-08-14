// what we need:

//onload function
window.addEventListener("load", function () {

let removeH1 = document.querySelector("h1");
removeH1.remove();

let addFirstH1 = document.createElement("h1");
addFirstH1.append("hello");
document.body.append(addFirstH1);
  
let p = document.createElement("p");
p.append("here's our paragraph");
document.body.append(p);

const img = document.createElement("img");
img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
img.alt = "This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
img.style = "width:50%";
document.body.append(img);

let addSecondH1 = document.createElement("h1");
addSecondH1.append("how are you?");
document.body.append(addSecondH1);

let ul = document.createElement("ul");
ul.append("List");
document.body.append(ul);

let li1 = document.createElement("li");
let li2 = document.createElement("li");
li1.append("list item #1");
li2.append("list item #2");
ul.append(li1, li2);

let addH2 = document.createElement("h2");
addH2.append("A colorful bird!");
  document.body.append(addH2);
  
  let a = document.createElement("a");
  a.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  a.append("Link to Wikipedia");
  document.body.append(a);
})

//create:
  // h1 DONE
  // p DONE
  // img DONE
  // another h1 DONE
  // ul w/ 2 li's DONE
  // h2
    //outside linkSS

    