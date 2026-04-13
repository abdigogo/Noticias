const noticias=document.getElementById('noticias');
const clave=document.getElementById('clave');
const noticias_main=document.querySelector('.noticias_main')
const main=document.getElementById('main');
const submit=document.getElementById('buscar_noticias');



submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const list_noticias=document.querySelectorAll('.noticia');
    list_noticias.forEach((n)=> n.remove());
    getNoticia(clave.value.trim());
})
const getNoticia = async (cla) =>{
   
    let data;
    try {
        data = await fetch(`https://newsdata.io/api/1/latest?apikey=XXXXXXXXXXXXX=${cla}`);
        data = await data.json();
    
        data.results.forEach(noticia => {

            const div_noticia=document.createElement('div');
            div_noticia.className = 'noticia';

             const div_info=document.createElement('div');
             div_info.className='info';

            const img = document.createElement('img');
            img.src = noticia.image_url;
            img.className = 'img';
            const title = document.createElement('h2');
            title.className = 'title';
            title.innerHTML = noticia.title;
            const fecha = document.createElement('h3');
            fecha.className = 'fecha';
            fecha.innerHTML = noticia.pubDate;
            const p = document.createElement('p');
            p.className = 'noticias_p';
            p.innerHTML = noticia.content;
            
            
            div_info.appendChild(title);
            div_info.appendChild(fecha);
            div_info.appendChild(p);
           div_noticia.appendChild(img);
            div_noticia.appendChild(div_info);
            noticias.appendChild(div_noticia);

            console.log(noticia.title);
        });
    } catch (e) {
        console.log(e)
        
    }
}


