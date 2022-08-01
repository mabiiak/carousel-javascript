document.querySelectorAll(".carousel")
  .forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHTML = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
      <div class="carousel__nav">
        ${buttonsHTML.join("")}
      </div
    `)

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // remove seleção
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        buttons.forEach(button => button.classList.remove("carousel__button--selected"));

        // adiciona item
        items[i].classList.add("carousel__item--selected");
        button[i].classList.add("carousel__button--selected")
      })
    })
  })

  // Referencia ---> https://www.youtube.com/watch?v=XtFlpgaLbZ4&ab_channel=dcode
