function search() {
   const townsArray = Array.from(document.querySelectorAll("ul li"));
   const inputElement = document.getElementById("searchText").value;
   const resultElement = document.getElementById("result");
   let matches = 0;

   if (inputElement) {
      townsArray.forEach((el) => {
         if (el.textContent.includes(inputElement)) {
            el.style.fontWeight = "bold"
            el.style.textDecoration = "underline";
            matches++;
         } else {
            el.style.fontWeight = "normal";
            el.style.textDecoration = "";
         }
      });
   }
   resultElement.textContent = (`${matches} matches found`);
}