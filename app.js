console.log('Muhammad Hassan Naeem');


let image = document.getElementById('spiderman-standing');
let count = 0;
console.log(image);

window.onkeydown = function(e){
    if(e.keyCode === 32){
        image.src = './Images/spider-sting.gif';
        image.style.width = '200px';
        setTimeout(() => {
            image.src = './Images/m-spiderman.gif';
        }, 2000);
    }
    if(e.keyCode == 68){
        if(count < 1711){
         count = count + 10;
         image.src = './Images/spidey-walk1.gif';
         image.style.marginLeft = count + 'px';
         console.log(count);    
        }    
    }
    if(e.keyCode === null){
        image.src = './Images/m-spiderman.gif';
    }
    if(e.keyCode == 65){
        if(count === 0){
            console.log('Everything is alright');
            image.src = './Images/spidey-scratchin.gif';
        }
        else{
            count = count - 10;
            image.src = './Images/spidey-walk1.gif';
            image.style.marginLeft = count + 'px';
            console.log(count);
        }
    }
}
window.onkeyup = function(e){
    if(e.keyCode === null){
        image.src = './Images/m-spiderman.gif';
    }
}


function getImage(element){
    console.log(element);
    element.setAttribute('src','./Images/spidey-scratchin.gif');
    element.setAttribute('title','What are you Thinking Right Now?');
    element.style.cursor = 'pointer';
}


function doneImage(elemewnt){
    console.log(elemewnt);
    elemewnt.setAttribute('src','./Images/m-spiderman.gif');
}