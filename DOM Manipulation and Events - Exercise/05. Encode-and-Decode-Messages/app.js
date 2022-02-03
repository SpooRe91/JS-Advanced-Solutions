function encodeAndDecodeMessages() {
 
    let btns = Array.from(document.querySelectorAll("button"));
    const encode = btns[0];
    const decode = btns[1];
   
    const textarea = document.querySelector(
      'textarea[placeholder="Write your message here..."]'
    );
    const recive = document.querySelector(
      'textarea[placeholder="No messages..."]'
    );
   
    let arr = [];
    let result = [];
   
    encode.addEventListener("click", charAt);
    decode.addEventListener("click", subtract);
   
    function charAt(e) {
      let text = textarea.value.split("");
      for (const a of text) {
        let char = a.charCodeAt(0) + 1;
        let word = String.fromCharCode(char);
        arr.push(word);
      }
      recive.value = arr.join("");
      textarea.value = "";
      arr=[]
    }
    function subtract() {
      let text = recive.value.split("");
      recive.value = "";
   
      for (const a of text) {
        let char = a.charCodeAt(0) - 1;
        let word = String.fromCharCode(char);
        result.push(word);
      }
   
      recive.value = result.join("");
      result=[]
    }
  }