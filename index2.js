const collectionDiv = document.querySelector(".collection")
const backbutton = document.querySelector(".backtopreviouspage")
backbutton.addEventListener("click", () => {
    window.history.back()
})



var filteredItems;
let currentId = getItemsFromLocalStorage2()
let items = getItemsFromLocalStorage()
// for (let index = 0; index < currentId.length; index++) {
    


//     console.log(currentId[index].id)

//    filteredItems=items.filter(item=>{
//       return item.id==currentId[index].id
//   })

//   console.log(filteredItems)
    
//   showItems( filteredItems)
  
//   let cuuren = document.createElement("div")
//   // collectionInside.className = "collection_inside"
//   let  cuurens = document.createElement("div")
//   // divDate.className = "divdate"
//   let stringToday = `<div class="item ">
//   <div class="item-description-time display_flex">
//   <div><p>Income- ${currentId[index].totalIncome} </p></div>
//   </div>
//   </div>`
//   cuurens.innerHTML = stringToday
  
//   cuuren.append(cuurens)
//   // collectionInside.insertBefore(divDate, collectionInside.children[0])
//   collectionDiv.insertAdjacentElement("afterbegin", cuuren)
  
  
// }
for (let i = 0; i < currentId.length; i++) {


    console.log("id loop chal rha hai")




  console.log("date do not Match not collection")
  let collectionInside = document.createElement("div")
  collectionInside.className = "collection_inside"
//   collectionInside.innerHTML=`<p>No data</p>`
//   let divDate = document.createElement("div")
//   divDate.className = "divdate"
//   let stringToday2 = `<div class="item ">
// <div class="item-description-time display_flex">
// <div><p>OUR</p></div>
// </div>
// </div>`
//   divDate.innerHTML = stringToday2
// //   collectionInside.insertAdjacentHTML("afterbegin", string)
//   collectionInside.insertBefore(divDate, collectionInside.children[0])
  collectionDiv.insertAdjacentElement("afterbegin", collectionInside)


  showItems(currentId[i].id)

  let cuuren = document.createElement("div")
  // collectionInside.className = "collection_inside"
  let  cuurens = document.createElement("div")
  // divDate.className = "divdate"
  let stringToday = `<div class="income_history">
  <div><p>Added Income- ${currentId[i].totalIncome} </p></div>
  </div>`
  cuurens.innerHTML = stringToday
  
  cuuren.appendChild(cuurens)
  // collectionInside.insertBefore(divDate, collectionInside.children[0])
  collectionDiv.insertAdjacentElement("afterbegin", cuuren)


    
}
// showItems(items)
function showItems(currentId) {

    // console.log("klaskla")
// let currentId = getItemsFromLocalStorage2()
let itemss = getItemsFromLocalStorage()

    const formattedTime = function getTime() {
        const now = new Date().toLocaleTimeString('en-us', {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
        })
        const date = now.split(',')[0].split(' ')
        const year = now.split(',')[1].trim()
        const time = now.split(',')[2].trim()
        let dateObj = {
            date,
            year,
            time
        }
        return dateObj

    }
    let date = formattedTime()
    // console.log(date)
    let items=
      
    itemss.filter(item=>{
        return item.id==currentId
    })
    
    console.log(items)
    for (let i = 0; i < items.length; i++) {

       console.log("loop running for ",items[i].time.date[1])
        
        let string = `  <div class="item">
        <div class="item-description-time display_flex">
        <div>
        <span>${items[i].sno}</span>
        </div>
            <div class="item-description">
            <p>${items[i].desc}</p>
            </div>
            <div class="item-time">
                <p>   ${items[i].time.time}</p>
            </div>
            <div class="item-amount">
                <p>${items[i].type === '+' ? '<span class="income-amount">income-amount:</span>' : '<span class="expense-amount">expense-amount:</span>'} ${items[i].value}</p>
            </div>
            </div>
            </div>`
        // collectionDiv.insertAdjacentHTML('afterbegin', string)

        // collectionDiv.innerHTML+=string
        let collection_insideDiv = document.querySelector(".collection .collection_inside")
        let collection_insideDivDate = document.querySelector(".divdate")
console.log(collection_insideDiv)   
     // console.log(items[i].time.date[1] + " " + items[i].time.date[0] + " " + items[i].time.year)

        let nextIndex = 0
        if(i>1){
         nextIndex++;
        }
        else{
         nextIndex;
        }
        // console.group(nextIndex)
   


        if (items[i].time.date[1] == items[nextIndex].time.date[1] && items[i].time.date[0] == items[nextIndex].time.date[0] && items[i].time.year == items[nextIndex].time.year &&items[i].id==items[nextIndex].id) {

            console.log("date MAtch",items[i].id,currentId,i)
             console.log(collection_insideDiv.contains(collection_insideDivDate))
            if (collection_insideDiv) {
                if (collection_insideDiv.contains(collection_insideDivDate)) {
                    console.log("date match collection inside div today contains")
                    collection_insideDiv.insertAdjacentHTML('afterbegin', string)
                    collection_insideDiv.insertBefore(collection_insideDivDate, collection_insideDiv.children[0])

                }
                else {
                    console.log("date Match today not contains")
                    let divDate = document.createElement("div")
                     divDate.className = 'divdate'
                    let stringToday = `<div class="item">
                    <div class="transaction_date_heading display_flex">
                    <p>Transactions</p><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year} </p>
                    </div>
                    </div>`
                    divDate.innerHTML = stringToday
                    collection_insideDiv.insertAdjacentHTML("afterbegin", string)
                    collection_insideDiv.insertBefore(divDate, collection_insideDiv.children[0])
                }
            }
            else {
                console.log("date match not collection inside div")
                collectionInside = document.createElement("div")
                collectionInside.className = "collection_inside"
                divDate = document.createElement("div")
                divDate.className = "divdate"
                let stringToday = `<div class="item ">
            <div class="transaction_date_heading display_flex">
            <p>Transactions</p><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year} </p>
            </div>
            </div>`
                divDate.innerHTML = stringToday
                collectionInside.insertAdjacentHTML('afterbegin', string)
                collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                collectionInside.insertBefore(divDate, collectionInside.children[0])
            }
        }

        else {
            if(collection_insideDiv){
                console.log("date alag ")
                    if (collection_insideDivDate.innerText == items[i].time.date[1] + " " + items[i].time.date[0] + " " + items[i].time.year) {
                        let collection_insideDiv = document.querySelector(".collection_inside")
                        if (collection_insideDiv.contains(collection_insideDivDate)) {
                            console.log("items today contains")
                            collection_insideDiv.insertAdjacentHTML("afterbegin", string)
                            collection_insideDiv.insertBefore(collection_insideDivDate, collection_insideDiv.children[0])
                        }
                        else {
                            console.log("items not today not  contains")
                            collection_insideDiv.insertAdjacentHTML("afterbegin", string)
                            collectionDiv.insertAdjacentElement("afterbegin", collection_insideDiv)
                            collection_insideDiv.insertBefore(collection_insideDivDate, collection_insideDiv.children[0])
                        }
                    }

                    else {
                        console.log("date do not Match not collection")
                        let collectionInside = document.createElement("div")
                        collectionInside.className = "collection_inside"
                        let divDate = document.createElement("div")
                        divDate.className = "divdate"
                        let stringToday = `<div class="item ">
            <div class="transaction_date_heading display_flex">
            <p>Transactions</p><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year} </p>
            </div>
            </div>`
                        divDate.innerHTML = stringToday
                        collectionInside.insertAdjacentHTML("afterbegin", string)
                        collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                        collectionInside.insertBefore(divDate, collectionInside.children[0])
                    }



                }
                    else {
                        console.log("date do not Match not collection")
                        let collectionInside = document.createElement("div")
                        collectionInside.className = "collection_inside"
                        let divDate = document.createElement("div")
                        divDate.className = "divdate"
                        let stringToday = `<div class="item ">
            <div class="transaction_date_heading display_flex">
            <p>Transactions</p><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year} </p>
            </div>
            </div>`
                        divDate.innerHTML = stringToday
                        collectionInside.insertAdjacentHTML("afterbegin", string)
                        collectionInside.insertBefore(divDate, collectionInside.children[0])
                        collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                    }


        }

   
}








}


function getItemsFromLocalStorage() {
    let items = localStorage.getItem('items')
    if (items) {
        itemsArray = JSON.parse(items)
        // console.log(itemsArray)
    }
    else {
        itemsArray = []
    }
    return itemsArray;
}
function getItemsFromLocalStorage2() {
    let money = localStorage.getItem('money')
    if (money) {
        moneyArray = JSON.parse(money)
        // console.log(moneyArray)
    }
    else {
        moneyArray = []
    }
    return moneyArray;
}


