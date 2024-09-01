export function generatePortfolioItems(items, language) {
    const portfolioContainer = document.createElement("div");
    portfolioContainer.className = "portfolio-container";
  
    items.forEach((item) => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-6 col-lg-4 " + item.filter;
  
      const portfolioItem = document.createElement("div");
      portfolioItem.className = "portfolio-item";
  
      const portfolioLink = document.createElement("a");
      portfolioLink.href =  item.link
      portfolioLink.className = "portfolio-link";
  
      const img = document.createElement("img");
      img.src = item.src;
      img.className = "img-fluid";
      img.alt =
        "Download free bootstrap 4 admin dashboard, free bootstrap 4 templates";
  
      const contentHolder = document.createElement("div");
      contentHolder.className = "content-holder";
  
      const imgPopup = document.createElement("a");
      imgPopup.className = "img-popup";
      imgPopup.href = item.src;
  
      const textHolder = document.createElement("div");
      textHolder.className = "text-holder";
  
      const title = document.createElement("h6");
      title.className = "title";
      title.textContent = item[language].title;
  
      const subtitle = document.createElement("p");
      subtitle.className = "subtitle";
      subtitle.textContent = item[language].comment;
  
      textHolder.appendChild(title);
      textHolder.appendChild(subtitle);
  
      contentHolder.appendChild(imgPopup);
      contentHolder.appendChild(textHolder);
  
      portfolioItem.appendChild(portfolioLink)
  
      portfolioLink.appendChild(img);
      portfolioLink.appendChild(contentHolder);
  
      colDiv.appendChild(portfolioItem);
  
      portfolioContainer.appendChild(colDiv);
    });
  
    return portfolioContainer;
  }

  

  // Leaf
export function initMap() {
    var map = L.map("map").setView([43.52977287361497, 5.458032848442829], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }



  export function smoothScrollTo(hash, offset = 100, duration = 700) {
    if (hash !== "") {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - offset,
        },
        duration,
        function () {
          history.replaceState(null, null, hash);
        }
      );
    }
  }

export function initPortfolioFilter() {
  var t = $(".portfolio-container");

  // Initialiser isotope avec le filtre par défaut ".new"
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1,
    },
  });

  // Gérer le clic sur les filtres
  $(".filters a").click(function () {
    // Retirer la classe "active" des autres filtres
    $(".filters .active").removeClass("active");

    // Ajouter la classe "active" à l'élément cliqué
    $(this).addClass("active");

    // Récupérer le filtre depuis l'attribut data-filter
    var i = $(this).attr("data-filter");

    // Appliquer le filtre avec isotope
    t.isotope({
      filter: i,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1,
      },
    });

    // Empêcher le comportement par défaut du lien (navigation)
    return !1;
  });
}

function portfolioFilter() {
    var t = $(".portfolio-container");
  
    // Initialiser isotope avec le filtre par défaut ".new"
    t.isotope({
      filter: ".new",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1,
      },
    });
  
    // Gérer le clic sur les filtres
    $(".filters a").click(function () {
      // Retirer la classe "active" des autres filtres
      $(".filters .active").removeClass("active");
  
      // Ajouter la classe "active" à l'élément cliqué
      $(this).addClass("active");
  
      // Récupérer le filtre depuis l'attribut data-filter
      var i = $(this).attr("data-filter");
  
      // Appliquer le filtre avec isotope
      t.isotope({
        filter: i,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1,
        },
      });
  
      // Empêcher le comportement par défaut du lien (navigation)
      return !1;
    });
  }