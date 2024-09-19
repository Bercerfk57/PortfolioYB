import items from "./DataBase.js";
import {
  generatePortfolioItems,
  initMap,
  smoothScrollTo,
  initPortfolioFilter,
} from "./ShowFonc.js";

$(document).ready(function () {
  $(".portfolio-link").on("click", function (event) {
    event.preventDefault();
    smoothScrollTo(this.hash, 100, 700);
  });
  $(".btn").on("click", function (event) {
    event.preventDefault();
    smoothScrollTo(this.hash, 50, 700);
  });
  $(".navbar .nav-link").on("click", function (event) {
    event.preventDefault();
    smoothScrollTo(this.hash, 35, 700);
  });
});

let langue;

if (document.title === "Portfolio YB FR") {
  langue = "FR";
} else {
  langue = "EN";
}

const downloadButton = document.getElementsByClassName(
  "download_CV_" + langue
);

for (let i = 0; i < downloadButton.length; i++) {
  downloadButton[i].addEventListener("click", function () {
    const pdfurl = "./assets/CV_FR.pdf";
    const link = document.createElement("a");
    link.href = pdfurl;
    link.download = `CV_${langue}.pdf`;
    link.click();
  });
}

// protfolio filters
$(window).on("load", function () {
  initPortfolioFilter();
});

// init

document.addEventListener("DOMContentLoaded", function () {
  initMap();
});

// Content Portfolio

let portfolioDiv;

if (document.title === "Portfolio YB FR") {
  portfolioDiv = generatePortfolioItems(items, "fr");
} else {
  portfolioDiv = generatePortfolioItems(items, "en");
}

const parentDiv = document.getElementById("ItemParent");
if (parentDiv) {
  parentDiv.appendChild(portfolioDiv);
} else {
  console.error("Div parent introuvable");
}


