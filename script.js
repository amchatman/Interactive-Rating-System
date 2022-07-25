const form = document.querySelector(".form");
const radioInputs = document.querySelectorAll(".radio-input");
const ratingCard = document.querySelector(".card-container");

let ratingValue;

radioInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    ratingValue = e.target.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!ratingValue) return;
  renderThankyouContent(ratingCard, ratingValue);
});

function renderThankyouContent(container, ratingValue) {
  container.innerHTML = `
    <div class="thank-you-container">
        <img src="./images/undraw_reviews_lp8w.png" alt="thankyou" class="rating-image"/>
        <div class="rating-result-container">
          <p class="result">You selected ${ratingValue} out of 5</p>
        </div>
        <h1 class="thank-you-title">Thank you!</h1>
        <p class="card-description">
        Thank you for taking the time to rate our service.
        Please get in touch if you ever need more assistance. 
        </p>
          <div class="back-btn-container">
            <a href="index.html" class="back-btn">Back</a>
          </div>
      </div>
    `;
}