let string = "";
let buttons = document.querySelectorAll(".buttons")
let display = document.querySelector("input")

//for cursor

Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener("click", (e) => {
        // console.log(e.target.innerHTML);
        
       

        if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            display.value = 0;
            
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.slice(0, -1)
            display.value = string;
        }

        
        else{
            string = string + e.target.innerHTML
            display.value = string;
            
        }
    })
})


//for key listener.
Array.from(buttons).forEach((buttons)=>{
    document.addEventListener("keydown", function(e){
        // console.log(e.key);
        

    if(!isNaN(e.key)){   // number check
        string += e.key
    }

    else if(e.key === "+"){
        string += "+"
    }

    else if(e.key === "-"){
        string += "-"
    }

    else if(e.key === "*"){
        string += "*"
    }

    else if(e.key === "/"){
        string += "/"
    }

    else if(e.key === "Enter"){
        string = eval(string)
    }
    else if(e.key === "."){
        string += "."
        
    }

    else if(e.key === "Backspace"){
        string = string.slice(0,-1)
    }

    else if(e.key === "Delete"){
        string = ""
        
    }

    document.querySelector("input").value = string
})
})