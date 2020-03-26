window.onload=function (){
    more=document.getElementById('more');
    more.onclick= loadimages;

}


var more='';

let img=0;


function loadimages() {

const images=document.getElementById("images");
const div=document.createElement("div");


    for(var i=img+1; i<img+10; i++){
        const light=document.createAttribute("data-lightbox");
        light.value="roadtrip";
        var image=new Image();
        image.src= i + ".jpg";
        const el=document.createElement('a');
        el.classList.add('photo');
        el.setAttributeNode(light);

        el.href=i+ ".jpg";
        images.append(el);
        el.appendChild(image);


        if(i===9) {
            var more = this.cloneNode(true);
            more.onclick = loadimages;
            this.parentNode.removeChild(this);
            document.body.appendChild(more);
            img=9;
            images.appendChild(div);
            div.classList.add('clear');
            break;


        }


    }
    this.parentNode.removeChild(this);




}





