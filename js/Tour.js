AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Amazing Spiderman - 1",
        url: "./assets/thumbnails/Amazing_Spiderman_1_Cosplay.jpg",
      },
      {
        id: "budapest",
        title: "Goosebumps - 3 ghoulish tales",
        url: "./assets/thumbnails/51FXNUBlFRL.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Superman - The war years",
        url: "./assets/thumbnails/superman.jpg",
      },
      {
        id: "new-york-city",
        title: "Dog man - Grime and Punishment",
        url: "./assets/thumbnails/dogman.jpg",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)

      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
     
      // Title Text Element
      const titleEl = this.createTitleEl(position,item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    })
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color: "black",
      opacity: 1,
    })
    entityEl.setAttribute("cursor-listener",{})
    return entityEl
  },
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive: "circle",
      radius: 9,
    })
    entityEl.setAttribute("material",{
      src : item.url
    })
    return entityEl
  },
  createTitleEl: function(position,item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text",{
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title
    })
    const elposition = position
    elposition.y = -20
    entityEl.setAttribute("position",elposition)
    entityEl.setAttribute("visible",true)
    return entityEl
  }
});
