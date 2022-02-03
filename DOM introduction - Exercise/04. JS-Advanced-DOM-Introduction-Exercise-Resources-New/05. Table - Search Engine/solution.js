function solve() {

   const button = document.getElementById("searchBtn");
   button.addEventListener('click', onClick);

   function onClick() {

      let allTableElements = Array.from(document.querySelectorAll("tbody tr"));

      const searchField = document.getElementById("searchField");
      let searchInput = searchField.value.toLowerCase();

      if (searchInput) {
         allTableElements.forEach((el) => {

            let textToLower = el.textContent.toLowerCase();
            if (textToLower.includes(searchInput)) {
               el.classList.add("select");
               return;
            } else {
               el.classList.remove("select");
               return;
            }
         });
         searchField.value = "";
      }
   }
}