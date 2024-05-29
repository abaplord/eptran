menu = document.getElementById("menu-icon")
dropdown = document.getElementById("dropdown")

var flag_open = false

menu.addEventListener("click", function (e) {
    
    if (flag_open == false){
        menu.style.cssText = `transition: 1s; 
                            -webkit-transform: rotate(90deg); 
                            -moz-transform: rotate(90deg); 
                            -o-transform: rotate(90deg); 
                            -ms-transform: rotate(90deg); 
                            transform: rotate(90deg);`
                            
        dropdown.innerHTML = `
            <div class="option"><a href="./initial-series.html">Séries Iniciais</a></div>
            <div class="option"><a href="./highschool.html">Ensino Médio</a></div>
        `

        build_menu()

        dropdown.style.cssText = `transition: 1s ;
                                border-left: 2px solid white;
                                border-right: 2px solid white;
                                position: fixed; 
                                right: 0; 
                                width: 33.33%; 
                                background-color: #093774; 
                                box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;`
        flag_open = true
    }else{
        menu.style.cssText = `transition: 1s;`
        dropdown.style.cssText = `transition: 1s; visibility: hidden;`

        dropdown.innerHTML = ``
        
        flag_open = false
    }
})

function build_menu(){
    options = document.getElementsByClassName("option")
    
    for (let i = 0; i < options.length; i++) {
        options[i].style.cssText = `
        border-bottom: 2px solid white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 3vmin;
        padding-bottom: 3vmin;
        text-align: center;
        font-size: 4vw;
        `
    }
}

function handleEvent(e) {
}