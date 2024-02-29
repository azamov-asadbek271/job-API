
import job from "./data.js"
let listEl = document.querySelector("#list")


job.forEach((e) => {
         
      let newItem = document.createElement("li");
      let newImg = document.createElement("img");
                   newItem.appendChild(newImg);
                   newImg.classList.add("images")
                
    let MainBox = document.createElement("div")
    
    let HeroBox = document.createElement("div")
     let newCompany = document.createElement("p");
                   HeroBox.appendChild(newCompany);
                   newCompany.classList.add("company")
         let newSpan = document.createElement("span");

          if (e.new) {
                    HeroBox.appendChild(newSpan);
                    newSpan.classList.add("new")
                 }
    let newFeatured = document.createElement("span");
                if (e.featured) {
                     HeroBox.appendChild(newFeatured);
                     newFeatured.classList.add("featured")
                }
      MainBox.appendChild(HeroBox);
      HeroBox.classList.add("hero-box")




     let newJob = document.createElement("p");
                  MainBox.appendChild(newJob);
                  newJob.classList.add("new-job")
    
     
     let CtaBox = document.createElement("div")   
    let newAgo = document.createElement("span");
               CtaBox.appendChild(newAgo);
     let newTime = document.createElement("span");
              CtaBox.appendChild(newTime);
      let newLocat = document.createElement("span");
              CtaBox.appendChild(newLocat);
       MainBox.appendChild(CtaBox);
       CtaBox.classList.add("cta-box")

          MainBox.classList.add("main-box")
       newItem.appendChild(MainBox)

       let FooterBox = document.createElement("div")
       let newRole = document.createElement("span");
                  FooterBox.appendChild(newRole);
                  newRole.classList.add("title")
       let newLevel = document.createElement("span");
                  FooterBox.appendChild(newLevel);
                  newLevel.classList.add("title");

       let newLenguages = document.createElement("div");
                  FooterBox.appendChild(newLenguages);
                  newLenguages.classList.add("lenguages")
        FooterBox.classList.add("footer")
       newItem.appendChild(FooterBox);


     
   
  newImg.src = e.logo;
   
  newCompany.textContent = e.company
  newJob.textContent = e.position
 if (e.new) {
    newSpan.textContent = "NEW!"
 }
  if (e.featured) {
    newFeatured.textContent = "FEATURED";
  }
     newAgo.textContent = e.postedAt;
     newTime.textContent = e.contract;
     newLocat.textContent = e.location;
     newRole.textContent = e.role
     newLevel.textContent = e.level;

     e.languages.forEach((num) => {
       let SpanLangua = document.createElement("span");
       newLenguages.appendChild(SpanLangua);

        SpanLangua.textContent = num;
        SpanLangua.classList.add("title")
        
     })
 newItem.classList.add("item")

listEl.appendChild(newItem)

})
