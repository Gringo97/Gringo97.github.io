  
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
        
        
        var titulo = document.createElement("h2");      
        var texto1 = document.createTextNode(arr[i].Titulo);
        
        var enlace = document.createElement("a");

        
        var p2 = document.createElement("p");
        var nodoDesc = document.createTextNode(arr[i].Descripcion);
        
        var p3 = document.createElement("p");
        var nodoFecha = document.createTextNode(arr[i].Fecha_de_realizacion);
        
        var p4 = document.createElement("p");
        var nodoMiembros = document.createTextNode(arr[i].Miembros_grupo);
        var p5 = document.createElement("p");
        var nodoAsignatura = document.createTextNode(arr[i].Asignatura_relacionada);
    

     
        
    
        
        
        
        
       
        
        //ATRIBUTOS//    
        
        article.setAttribute("class","box");
        div2.setAttribute("class", "team-member");
        
        imagen.setAttribute("class", "child fixed-size");
        imagen.setAttribute("src", arr[i].Foto);
        
        enlace.setAttribute("href", arr[i].Link);
        enlace.setAttribute("target", "_blank");
        
        titulo.setAttribute("class", "child text");
        

        
        
        
        
        
        

        section.appendChild(article);
        article.appendChild(div2);
        div2.appendChild(enlace);
        enlace.appendChild(imagen);
        
        div2.appendChild(titulo);
        div2.appendChild(p2);
        p2.appendChild(nodoDesc);
        
        div2.appendChild(p3);
        p3.appendChild(nodoFecha);
        
        div2.appendChild(p4);
        p4.appendChild(nodoMiembros);
        
        div2.appendChild(p5);
        p5.appendChild(nodoAsignatura);
        
 
     
        
        
        
        titulo.appendChild(texto1);
       
       
        
        
   

    }

       
}
    

    