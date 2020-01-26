


/*
addEventListener("resize",function(){
   console.log($(".main").Height());
});
*/



window.onload = function(){
    let verify = verifyAnimation();
    console.log(verify);
    if (verify){
        $(".main").click(function(){
            this.fadeOut(500,function(){
                alert("sumi");
            });
        });
        
        

    }
   
};
    


function $(param){
   
    e =  document.querySelector(param);

    return this;
}


function click(callback){
    verifyAnimation();
    let type = typeof e;
   selectTypeCorrected();
    e.addEventListener("click",function(){
         callback();
    });
    
    return this;
  }


  function selectTypeCorrected(type){
    if( type === "string"){
     e = document.querySelector(e);
   } 
};


function verifyAnimation(){

     head = document.querySelector("head>link[href*='animate.css'");
     let lastChild = document.querySelector("head>title");
     
    if (head === null){
        let head = document.querySelector("head");
        let link = document.createElement("link");
        link.setAttribute("rel","sylesheet");
        link.setAttribute("href","animate.css");
        head.appendChild(link);
        head.insertBefore(link,lastChild); 
    }

    return true;  
}

addEventListener("timeOut",function(){
    alert("oi");
},255);


function fadeOut(time,callback = null){
    verifyAnimation();
    let type = typeof e;
    selectTypeCorrected();
    setTimeout(function(){   
        e.classList.add("animated");
        e.classList.remove("fadeIn");
        e.classList.add("fadeOut");
        if(callback){
            setTimeout(function(){
                callback();
            },time); 
        };
    },time);   
    return this;
 }

 function fadeIn(time,callback = null){
    let type = typeof e;
    selectTypeCorrected();
    setTimeout(function(){
        e.classList.add("animated");
        e.classList.remove("fadeOut");
        e.classList.add("fadeIn");
        if(callback){
            setTimeout(function(){
                callback();
            },time); 
        };
    },time);   
    return this;
 }

 function getWindowHeight(){
    addEventListener("resize",function(){
        let innerHeight = window.innerHeight;
        return innerHeight;
    });
}

function Height(){
  return  Array(e)[0].offsetHeight;
}


  
