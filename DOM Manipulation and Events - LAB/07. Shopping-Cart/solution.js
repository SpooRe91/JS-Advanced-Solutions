function solve() {


   //2.append an eventListener to the main div, containing all product divs.
   document.querySelector('.shopping-cart').addEventListener('click', clicked);

   const textArea = document.getElementsByTagName('textarea')[0];
   const checkOutButton = document.getElementsByClassName('checkout')[0];
   checkOutButton.addEventListener('click', checkOut);

   let finalPrice = 0;
   let shoppingCart = [];

   function clicked(e) {
      //1.append the product and price to the text area, when the button "add" is clicked, with toFixed(2);
      if (e.target.classList.contains('add-product')) {

         //1-1. Take the product element and the price elements from the div
         const product = e.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent).toFixed(2);

         if (!shoppingCart.includes(name)) {
            shoppingCart.push(name);
         }
         finalPrice += Number(price);

         textArea.value += `Added ${name} for ${price} to the cart.\n`
      };
   };
   //3.on "checkout" calc total money and append it to a list of all UNIQUE items
   function checkOut() {
      textArea.value += `You bought ${shoppingCart.join(", ")} for ${finalPrice.toFixed(2)}.`
      disableButtons();
   }
   function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}
//2 hours taken



