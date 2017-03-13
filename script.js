  
var xmlhttp = new XMLHttpRequest();
var url = "json.json";

xmlhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.actividades;
        myFunction(myArr);
    }
};


xmlhttp.open("GET", url, true);
xmlhttp.send();




function myFunction(arr) {
   var section = document.getElementById("id01");
    for(i = 0; i < arr.length; i++) {
        
         var article = document.createElement("article");
         var div2 = document.createElement("div");
         var imagen = document.createElement("img");
         var parrafo = document.createElement("p");
         var enlace = document.createElement("a");
         var p2 = document.createElement("p");
         var p3 = document.createElement("p");
        
        
              
        var texto1 = document.createTextNode(arr[i].Titulo);
        var nodoEnlace = document.createTextNode(arr[i].Link);  
        var nodoDesc = document.createTextNode(arr[i].Descripcion);
        var nodoDestacado = arr[i].Destacado;
        
        
        
        
       
        
        //ATRIBUTOS//    
        
        article.setAttribute("class","box");
        div2.setAttribute("class","team-member");
        
        imagen.setAttribute("class","child fixed-size");
        imagen.setAttribute("src", arr[i].Foto);
        enlace.setAttribute("href", arr[i].Link);
        enlace.setAttribute("target", "_blank");
        parrafo.setAttribute("class","child text");
        
        
        
        
        

        section.appendChild(article);
        article.appendChild(div2);
        div2.appendChild(imagen);
        div2.appendChild(parrafo);
        parrafo.appendChild(texto1);
        div2.appendChild(p2);
        p2.appendChild(nodoDesc);
        div2.appendChild(p3);
        p3.appendChild(nodoEnlace);
   

    }

       
}
    

    