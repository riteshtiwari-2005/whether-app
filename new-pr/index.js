const items = [
    { name: "Smartphone", price: 699, category: "electronics" },
    { name: "Laptop", price: 1299, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
    { name: "Headphones", price: 149, category: "electronics" },
    { name: "Bluetooth Speaker", price: 99, category: "electronics" },
    { name: "T-Shirt", price: 25, category: "fashion" },
    { name: "Jeans", price: 50, category: "fashion" },
    { name: "Jacket", price: 100, category: "fashion" },
    { name: "Sneakers", price: 80, category: "fashion" },
    { name: "Handbag", price: 60, category: "fashion" },
    { name: "Sofa", price: 500, category: "home items" },
    { name: "Dining Table", price: 750, category: "home items" },
    { name: "Desk Lamp", price: 40, category: "home items" },
    { name: "Curtains", price: 70, category: "home items" },
    { name: "Rug", price: 120, category: "home items" },
    { name: "Tablet", price: 350, category: "electronics" },
    { name: "Blender", price: 150, category: "home items" },
    { name: "Sunglasses", price: 120, category: "fashion" },
    { name: "Gaming Console", price: 499, category: "electronics" },
    { name: "Bookshelf", price: 200, category: "home items" }
  ];
  
let main_id = document.getElementById("main_div");
let category_1=document.getElementById("all")
console.log(items)
function for_each(items)
{
  items.forEach((item)=>{
        console.log(items)
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = ` <img
                src="https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Avatar"
                style="width: 100%"
              />
              <div class="container">
                <h4>
                  <b> ${item.name} </b><br>
                  <b>${item.price}</b>
                </h4>
                <p>${item.category}</p>
              </div>`;
        main_id.appendChild(card);
    })
}
for_each(items)
category_1.addEventListener("change",()=>{
  main_id.innerHTML="";
  console.log(category_1.value)
if(category_1.value=='All')
  {
    for_each(items)
  }
else
{
  let filter_array=items.filter((item)=>{
return category_1.value===item.category
  })
  for_each(filter_array)
}
});