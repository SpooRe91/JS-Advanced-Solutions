function create(words) {

   let contentElement = document.getElementById("content");
   contentElement.addEventListener('click', show)

   words.forEach((el) => {

      const divElement = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';
      divElement.appendChild(p);
      contentElement.appendChild(divElement);
   });

   function show(ev) {
      if (ev.target != contentElement && ev.target.tagName == "DIV") {
         console.log(ev.target.firstChild.style.display = "block");
      }
   }
}