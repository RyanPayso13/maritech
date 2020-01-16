function setup() {
  // Write your code here.
  let spans = document.querySelectorAll("span");

  [...spans].forEach((el, index, elArr) => {
    el.classList.remove("active");

    el.addEventListener("click", event => {
      event.preventDefault();

      let sliced = elArr.slice(index, elArr.length);
      sliced.forEach(el => el.classList.add("active"));
    });
  });
}

// Example case.
document.body.innerHTML = `
  <div id='rating'>
    <span class="active">*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
    <span>*</span>
  </div>`;

setup();

document.getElementsByTagName("span")[1].click();
console.log(document.body.innerHTML);
