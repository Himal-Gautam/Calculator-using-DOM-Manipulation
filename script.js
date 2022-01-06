const result = document.getElementById("result");

result.addEventListener("keydown",(e) => {
  let temp = result.value.slice(0, result.value.length);
  console.log(e.key);
  result.addEventListener("keyup",(event) => {
    if (isFinite(parseInt(event.key))) {
      console.log(event.key,"inserted");
    }
    else{
      result.value = temp;
      console.log(event.key,"removed");
      alert(event.key + " is not valid")
    }
  });
})
