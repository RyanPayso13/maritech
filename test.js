function setup() {
  // Write your code here.
  const spans = document.querySelectorAll("span");

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
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
</div>`;

setup();

document.getElementsByTagName("span")[2].click();
console.log(document.body.innerHTML);
