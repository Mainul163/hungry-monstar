const food = document.getElementById('search-food');
document.getElementById('btn').addEventListener('click', () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food.value}`)
        .then(res => res.json())
        .then(data => showFood(data.meals))
})

const showFood=iteam=>{
  console.log(iteam)
const divs=document.getElementById('divs')

document.getElementById('divs').innerHTML=''
   iteam.map(food=>{
  
    const newDiv=document.createElement('div')
    const foodIteam=`
    <div class="card" style="width: 18rem;">
  <img src="${food.strMealThumb}" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name: ${food.strMeal}</h5>
   
    <div class='text-center'>
    <button href="#" class="btn btn-primary center me-2" onclick="addBtn('${food.strMeal}')">Go somewhere</button>

    </div>
  </div>
</div>
    
    `
     newDiv.classList.add('col-md-3')
     newDiv.id='newID'
     newDiv.innerHTML = foodIteam;
     divs.appendChild(newDiv)

    
    // divs.insertAdjacentHTML('beforeend',foodIteam)
   
   })
}
const addBtn=name=>{
  console.log(name)
}
