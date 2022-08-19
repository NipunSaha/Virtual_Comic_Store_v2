AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId : {default:"",type:"string"}
    },
    init: function () {
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },
    handleMouseEnterEvent: function () {
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handlePlacesListState: function () {
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal","budapest","eiffel-tower","new-york-city"]
        if (placesId.includes(id)) {
            const  placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener",{selectedItemId: id})
            this.el.setAttribute("material",{
                color: "blue",
                opacity: 1
            })
        }
    },
    handleMouseLeaveEvent: function () {
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data
            if (selectedItemId) {
                const element = document.querySelector(`#${selectedItemId}`)
                const id = element.getAttribute("id")
                if (id == selectedItemId) {
                    element.setAttribute("material",{
                        color: "black",
                        opacity: 1  
                    })
                }
            }
        })
    }
})