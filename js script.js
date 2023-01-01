var content = [
    {
        path : 'Sans titre.png',
        title : "JS course",
        price : 14.99,
        cat : "Js",
    },
    {
        path : 'css.png',
        title : "css course",
        price : 0.99,
        cat : "css",
    },
    {
        path : 'HTML.png ',
        title : "Learn HTML",
        price : 5.99,
        cat : "html",
    },
    {
        path : 'css course.png',
        title : "css full course",
        price : 9.99,
        cat : "css",
    },
    {
        path : 'html2.png',
        title : "html from scratch",
        price : 19.99,
        cat : "html",
    },
    {
        path : 'js.png',
        title : "full js course ",
        price : 25.99,
        cat : "Js",
    },
    {
        path : 'php.png',
        title : "PHP course",
        price : 59.99,
        cat : "php",
    },
    {
        path : 'sql.png',
        title : "learn sql for free",
        price : 0.00,
        cat : "sql",
    },
    {
        path : 'index.png',
        title : "python full course",
        price : 99.99,
        cat : "py",
    },
    {
        path : 'ps.png',
        title : "leaen Adobe PS",
        price : 5.99,
        cat : "ps",
    },

]






var c = document.querySelector('#test');
function create(path , titre , price ){
    let div  = document.createElement('div'),
    img  = document.createElement('img'),
    p  = document.createElement('p'),
    span  = document.createElement('span');
    img.src = path ;
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(price));
    div.setAttribute('class','card col-3 me-2 mb-2');
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    c.append(div)
}
var linkall=document.querySelector('#filter_All');
content.forEach((v)=>{
    create(v.path , v.title , v.price);
    });
function  filall(){
let  div =document.querySelector('#test');
div.innerHTML="";
content.forEach((v)=>{
create(v.path , v.title , v.price);
});
}


function  filcss(){
    let  div =document.querySelector('#test');
    div.innerHTML="";

    content.forEach((v)=>{
        if (v.cat=="css"){

            create(v.path , v.title , v.price);
        };
    
    });
    }
    function  filjs(){
        let  div =document.querySelector('#test');
        div.innerHTML="";
    
        content.forEach((v)=>{
            if (v.cat=="Js"){
    
                create(v.path , v.title , v.price);
            };
        
        });
        }
        function  filhtml(){
            let  div =document.querySelector('#test');
            div.innerHTML="";
        
            content.forEach((v)=>{
                if (v.cat=="html"){
        
                    create(v.path , v.title , v.price);
                };
            
            });
            }
            function  filphp(){
                let  div =document.querySelector('#test');
                div.innerHTML="";
            
                content.forEach((v)=>{
                    if (v.cat=="php"){
            
                        create(v.path , v.title , v.price);
                    };
                
                });
                }
                function  filsql(){
                    let  div =document.querySelector('#test');
                    div.innerHTML="";
                
                    content.forEach((v)=>{
                        if (v.cat=="sql"){
                
                            create(v.path , v.title , v.price);
                        };
                    
                    });
                    }



function updateTextInput(val) {
    document.getElementById('textInput').innerHTML=val; 
  }
