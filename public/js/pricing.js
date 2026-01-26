const cards = document.querySelectorAll(".cards .card");
const priceToggler = document.querySelector(
  ".tool-description-sec .price-toggler-sec .checkbox-wrapper",
);
const monthLabel = document.querySelector(
  ".tool-description-sec .price-toggler-sec .monthly-label",
);
const annualLabel = document.querySelector(
  ".tool-description-sec .price-toggler-sec .annually-label",
);
const annualDiscount = document.querySelector(
  ".tool-description-sec .price-toggler-sec .discount",
);
const pricing = {
  basic: {
    monthly: 49,
    annual: Math.round(49 * 0.8), // 39.20 → 39
  },
  professional: {
    monthly: 99,
    annual: Math.round(99 * 0.8), // 79.20 → 79
  },
  enterprise: {
    monthly: 299,
    annual: Math.round(299 * 0.8), // 239.20 → 239
  },
};

function addHoverEffect(e) {
  const ctaBtn = e.currentTarget.querySelector(".cta-btn");
  ctaBtn.innerHTML = "Get Started";
}

function removeHoverEffect(e) {
  const ctaBtn = e.currentTarget.querySelector(".cta-btn");
  ctaBtn.innerHTML = "Schedule a demo";
}

function changePricingUI(e) {
  const checkbox = e.currentTarget.querySelector('input[type = "checkbox"]');
  if (checkbox.checked) {
    annualLabel.style.opacity = "100%";
    monthLabel.style.opacity = "70%";
    annualDiscount.classList.add("show");
    cards.forEach((card) => {
      if (card.classList.contains("basic")) {
        const pricingLabel = card.querySelector(".price");
        pricingLabel.textContent = `$${pricing.basic.annual} / month`;
      } else if (card.classList.contains("professional")) {
        const pricingLabel = card.querySelector(".price");
        pricingLabel.textContent = `$${pricing.professional.annual} / month`;
      } else if (card.classList.contains("enterprise")) {
        const pricingLabel = card.querySelector(".price");
        pricingLabel.textContent = `$${pricing.enterprise.annual} / month`;
      }
    });
  } else {
    annualLabel.style.opacity = "70%";
    monthLabel.style.opacity = "100%";
    annualDiscount.classList.remove("show");
    cards.forEach((card) => {
      if (card.classList.contains("basic")) {
        const pricingLabel = card.querySelector(".price");
        pricingLabel.textContent = `$${pricing.basic.monthly} / month`;
      } else if (card.classList.contains("professional")) {
        const pricingLabel = card.querySelector(".price");
        pricingLabel.textContent = `$${pricing.professional.monthly} / month`;
      } else if (card.classList.contains("enterprise")) {
        const pricingLabel = card.querySelector(".price");
        pricingLabel.textContent = `$${pricing.enterprise.monthly} / month`;
      }
    });
  }
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", addHoverEffect);
  card.addEventListener("mouseleave", removeHoverEffect);
});

priceToggler.addEventListener("change", changePricingUI);
document.addEventListener("DOMContentLoaded", changePricingUI);
