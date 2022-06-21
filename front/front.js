let data = document.getElementsByClassName('ipt1')[0];
let parent4 = document.getElementById('data1')
let liste =[]
function add(){
    
    let para1 = document.createElement("i");
    para1.setAttribute('class', 'fa fa-times-circle');
    para1.setAttribute('style', 'color:red;font-size:24px');
    para1.setAttribute('onclick', 'myRemove(this)');
    let btn1 = document.createElement("button");
    btn1.setAttribute('style',"border:none;background-color:transparent" );
    btn1.appendChild(para1)

    let para2 = document.createElement("i");
    para2.setAttribute('class', 'fa fa-edit');
    para2.setAttribute('style', 'color:blue;font-size:24px');
    para2.setAttribute('onclick', 'myAdd(this)');
    // para2.setAttribute('onclick', 'changeClass(this)');
    let btn2 = document.createElement("button");
    btn2.setAttribute('style',"border:none;background-color:transparent" );
    btn2.appendChild(para2)

    let para3 = document.createElement("i");
    para3.setAttribute('class', 'fa fa-check-circle');
    para3.setAttribute('style', 'font-size:24px;color:green');
    let btn3 = document.createElement("button");
    btn3.setAttribute('style',"border:none;background-color:transparent" );
    btn3.appendChild(para3);

    let parent3 = document.createElement('div');
    parent3.setAttribute('class','ch22');
    parent3.appendChild(btn3);
    parent3.appendChild(btn2)
    parent3.appendChild(btn1)

    let parent2 = document.createElement('div');
    
    if(!(liste.includes(data.value))){
        parent2.setAttribute('class','ch21');
        parent2.innerHTML = data.value
        
    }
    else{
        parent2.setAttribute('class','ch23');
        parent2.innerHTML = data.value
        
    }
    
    liste.push(data.value)
    console.log(liste)

    let parent1 = document.createElement('div');
    parent1.setAttribute('class','child2');
    parent1.appendChild(parent2);
    parent1.appendChild(parent3)
    parent4.appendChild(parent1);
    data.value  = ''
    // console.log(parent4.children)

}

function myRemove(p){
    let esas = p.parentElement.parentElement.parentElement.children[0].innerHTML
    if(liste.includes(esas)){
        esas = liste.indexOf(esas);
        liste.splice(esas, 1)
        // console.log(liste)
    }
    p.parentElement.parentElement.parentElement.remove()
    
}

function yeni(){

}

function delete_all(p){ 

    let i = 0
    let b=0
    liste =[]
    while(i<parent4.children.length){
        parent4.children[b].remove()
    }
    
}

function myAdd(p){
    let basic_div = p.parentElement.parentElement.parentElement.parentElement.parentElement
    let data1 = p.parentElement.parentElement.parentElement.parentElement
    let selc_div = p.parentElement.parentElement.parentElement
    let count1 = 0
    let mybut = document.createElement('button');
    mybut.setAttribute('class','child42');
    mybut.setAttribute('value','edit');
    mybut.setAttribute('onclick','myEdit(this)');
    let myinpt = document.createElement('input');
    myinpt.setAttribute('class','child41');
    myinpt.value =  p.parentElement.parentElement.parentElement.children[0].innerHTML
    let mydiv = document.createElement('div');
    mydiv.setAttribute('class','child4');
    mydiv.appendChild(myinpt);
    mydiv.appendChild(mybut);
    basic_div.appendChild(mydiv);
    for( i of data1.children){
        count1++
        if(i==selc_div){
            break
        }
        
   }
   console.log(count1)
    
    let deyer = (data1.children[count1-1])
    deyer.setAttribute('id','div1')
    // for(i of data1.children){
    //     console.log(i)
    // }
    // console.log(child2)

}

function myEdit(p){
    let count = 0
    let olc=p.parentElement.children[0].value 
    let new2 = p.parentElement.parentElement.children[2].children 
    for(i in new2){
        if(new2[i].id == 'div1'){
            new2[i].children[0].innerHTML = olc

        }  
        new2[i].id = '' 
    }

    console.log(count)
}   


// function myEdit(p){
//     let olc=p.parentElement.children[0].value 
//     let new2 = p.parentElement.parentElement.children[2].children[0]  
//     if(new2.children[0].class='div1'){
//         new2.children[0].innerHTML=olc
//     }   



    // for( i of new2){
        
    //     console.log(i.children[0])
    //     // i.children[0].innerHTML=olc 
    //     if(i.children[0].class = 'div1'){
    //         console.log(i.children[0])
    //         i.children[0].innerHTML = olc
    //     }
    // }
    


// function myAdd(p){
//     let inpt1 = p.parentElement.parentElement.parentElement
//     console.log(inpt1.children[0])
//     let inpt = document.createElement('input');
//     inpt.setAttribute('class', 'ch25')
//     let but = document.createElement('button')
//     but.setAttribute('onclick', 'change(this)')
//     but.setAttribute('style','width:40px')
//     inpt.value =inpt1.children[0].innerHTML
//     inpt1.appendChild(inpt)
//     inpt1.appendChild(but)
    
// }

// function change(p){
//     let tetan = p.parentElement
//     console.log(tetan.children[2].value)
//     liste.splice(tetan.children[0].innerHTML, 1)
//     liste.push(tetan.children[2].value)
//     tetan.children[0].innerHTML=tetan.children[2].value

//     tetan.children[2].remove()
//     tetan.children[2].remove()
// }












// let para = document.createElement("div");
// para.setAttribute('class', 'asasa');
// para.innerHTML = data;