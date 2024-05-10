let enterName = document.getElementById("name"),
   enterSureN = document.getElementById("surename"),
    EnterAge =  document.getElementById("age"),
    BtnResult = document.getElementById("btn")
//********************************************** */
let Img = document.getElementById("img")
   
    ResultSureN = document.getElementById("result-surename")
    ResultAge = document.getElementById("result-age")



let person ={
    name: 'Malika',


}

BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person.name && enterSureN.value == person.surename && EnterAge.value == person.age
     ){
       ResultName.innerHTML = person.name 
       ResultName.style.color='#fff'
       ResultSureN.innerHTML = person.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person.img}" alt="malika">` 
       Img.style.boxShadow='0 0 20px red'
    }
   
   
})
///--------------------------------------//
let person1 ={
    name: 'Mahliyo',
    surename:'Juraqulova',
    age:16,
    img:`mahliyo.jpg`

}
BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person1.name && enterSureN.value == person1.surename && EnterAge.value == person1.age
     ){
       ResultName.innerHTML = person1.name 
       ResultName.style.color='#fff'
       ResultSureN.innerHTML = person1.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person1.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person1.img}" alt="mahliyo">`
       Img.style.boxShadow='0 0 20px red'
    }
   
    
   
})
///////------------------------------------//
let person2 ={
    name: 'Zuxra',
    surename:'Roziyeva',
    age:16,
    img:`zuxra.jpg`

}
BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person2.name && enterSureN.value == person2.surename && EnterAge.value == person2.age
     ){
       ResultName.innerHTML = person2.name 
       ResultName.style.color='#fff' 
       ResultSureN.innerHTML = person2.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person2.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person2.img}" alt="Zuxra">`
       Img.style.boxShadow='0 0 20px red'
     

    }
   
   
})
///
let person3 ={
    name: 'Xanifa',
    surename:'Abduraxmonova',
    age:13,
    img:`Xanifa.jpg`

}
BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person3.name && enterSureN.value == person3.surename && EnterAge.value == person3.age
     ){
       ResultName.innerHTML = person3.name 
       ResultName.style.color='#fff'
       ResultSureN.innerHTML = person3.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person3.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person3.img}" alt="Xanifa">`
       Img.style.boxShadow='0 0 20px red'
    }
    
   
    
})

let person4 ={
    name: 'Nafisa',
    surename:'Karamatova',
    age:29,
    img:`Nafisa.jpg`

}
BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person4.name && enterSureN.value == person4.surename && EnterAge.value == person4.age
     ){
       ResultName.innerHTML = person4.name 
       ResultName.style.color='#fff'
       ResultSureN.innerHTML = person4.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person4.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person4.img}" alt="Nafisa">`
       Img.style.boxShadow='0 0 20px red'
    }
   
    
})
let person5 ={
    name: 'Sanobar',
    surename:'Alimova',
    age:16,
    img:`Sanobar.jpg`

}
BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person5.name && enterSureN.value == person5.surename && EnterAge.value == person5.age
     ){
       ResultName.innerHTML = person5.name 
       ResultName.style.color='#fff'
       ResultSureN.innerHTML = person5.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person5.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person5.img}" alt="Sanobar">`
       Img.style.boxShadow='0 0 20px red'
    }
   
    
})


let person6 ={
    name: 'Guli',
    surename:'Axatova',
    age:16,
    img:`Guli.jpg`

}
BtnResult.addEventListener("click", ()=>{
    if(enterName.value == person6.name && enterSureN.value == person6.surename && EnterAge.value == person6.age
     ){
       ResultName.innerHTML = person6.name 
       ResultName.style.color='#fff'
       ResultSureN.innerHTML = person6.surename
       ResultSureN.style.color='#fff'
       ResultAge.innerHTML = person6.age
       ResultAge.style.color='#fff'
       Img.innerHTML = `<img src="${person6.img}" alt="Guli">`
       Img.style.boxShadow='0 0 20px red'
    }
    else if(enterName.value == "" && enterSureN.value == "" && EnterAge.value == ""){
        alert(" ma'lumotni kiriting ! ")
    }
   
    
})


