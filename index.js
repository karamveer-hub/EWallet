// function inputPlaceholder(event){
//     event.target.style.fontSize="10px"

// }

const incomeExpenseDiv = document.querySelector(".income-expense")
const addDiv = document.querySelector(".add")
const collectionDiv = document.querySelector(".collection")
const removeTransaction = document.querySelector(".removeTransaction")
const userMoney = document.querySelector("#userMoney")
const addMoney = document.querySelector("#addMoney")
const addMoneyAgain = document.querySelector("#addMoneyAgain")
let form = document.querySelector("#ewallet-form")
const message = document.querySelector("#form-message")
var totalIncome;
// let removeTransactionCondition=false;
// var id=1;
var showTransaction = true;

let currentId = getItemsFromLocalStorage2()
// let items;



addMoneyAgain.addEventListener("click", (e) => {
    e.preventDefault()
    userMoney.style.display = "inline-block"
    // addMoney.style.display="inline-block"
    addMoney.classList.toggle("active")
    console.log("ksjdk")
    // idGenerator()
})
let id=function idGenerator(){
    if(currentId.length>0){
        id=currentId[currentId.length-1].id+1
    }
    else{
        id=1;
    }
    return id
}
console.log(id)

// removeTransaction.addEventListener("click", () => {
//     showTransaction=false
//     let itemss = getItemsFromLocalStorage()
//     let items= itemss.filter(item => {
//         return item.id == parseInt(currentId[currentId.length - 1].id)
//     })
    
//        showTransaction==true?items==items:items=[] 
//      console.log(items)
//        showItems(items)
   
// })
// console.log(items)

addMoney.addEventListener("click", (e) => {

    if (userMoney.value != "") {
        id=id()
        addItemsToLocalStorage2(userMoney.value, id)
        EwalletBalance()
    } else {
        alert("please")
    }

})
addMoney.addEventListener("keyup", (e) => {
    
    if (e.keyCode == '13') {

        if (userMoney.value != "") {
        id=id()
            addItemsToLocalStorage2(userMoney.value, id)
            EwalletBalance()
        } else {
            alert("please")
        }
    }
})
function addItemsToLocalStorage2(totalIncome, id) {
    let money = getItemsFromLocalStorage2()
    money.push({ totalIncome, id })
    localStorage.setItem('money', JSON.stringify(money))
    EwalletBalance()
}
function getItemsFromLocalStorage2() {
    let money = localStorage.getItem("money")
    if (money) {
        moneyArray = JSON.parse(money)
    }
    else {
        moneyArray = []
    }
    return moneyArray
}



//total income before everything
console.log(showTransaction)
EwalletBalance()
function EwalletBalance() {

    setTimeout(() => {
        form[1].focus()
    }, 1000);
    totalIncomeArray = getItemsFromLocalStorage2()
    console.log(totalIncomeArray[totalIncomeArray.length - 1])

    if (totalIncomeArray.length > 0) {
        console.log("kjskdjkkjkjkjkjljjjlkj")
        userMoney.style.display = "none"
        // addMoney.style.display="none"
        addMoneyAgain.style.display = "inline-block"
        incomeExpenseDiv.style.display = "flex"
        addDiv.style.display = "block"
        collectionDiv.style.display = "block"
        totalIncome = parseInt(totalIncomeArray[totalIncomeArray.length - 1].totalIncome)
    }
    else {
        userMoney.style.display = "inline-block"
        addMoney.style.display = "inline-block"
        addMoneyAgain.style.display = "none"
        incomeExpenseDiv.style.display = "none"
        addDiv.style.display = "none"
        collectionDiv.style.display = "none"
    }
    let expense = 0, balance = 0;
    let items = getItemsFromLocalStorage()


    let get = items.filter(item => {
        return item.id == parseInt(totalIncomeArray[totalIncomeArray.length - 1].id)
    })
    console.log(get)

    for (let item of get) {
        console.log(item)
        if (item.type === '+')
            totalIncome += (+item.value)
        else
            expense += (+item.value)
    }

    balance = totalIncome - expense
    document.querySelector(".balance-amount p").innerText = balance
    document.querySelector(".income-totalamount p").innerText = totalIncome
    document.querySelector(".expense-totalamount p").innerText = expense
    return balance

}

let itemss = getItemsFromLocalStorage()
let items= itemss.filter(item => {
    return item.id == parseInt(currentId[currentId.length - 1].id)
})


//getting the items from local storage first
showItems(items)
function showItems(items) {

    console.log(items)
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
    console.log(date)


//  items=[]
    
    console.log(items)

    // let nextIndex = 0
    // let i=0;

    if (items.length>0) {

        for (let i = 0; i < items.length; i++) {
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
          
            let collection_insideDiv = document.querySelector(".collection_inside")
            let collection_insideDivDate = document.querySelector(".divdate")
            console.log(collection_insideDiv)
            // console.log(items[i].time.date[1])
            // console.log(items.length)
    
            console.log(items[i].time.date[1] + " " + items[i].time.date[0] + " " + items[i].time.year)
    
            let nextIndex = 0
           if(i>1){
            nextIndex++;
           }
           else{
            nextIndex;
           }
            // console.group(nextIndex)
    
            if (items[i].time.date[1] == items[nextIndex].time.date[1] && items[i].time.date[0] == items[nextIndex].time.date[0] && items[i].time.year == items[nextIndex].time.year) {
                console.log(i)
                //  console.log(items[items.length-1].time.date[1] )
    
                if (collection_insideDiv) {
                    if (collection_insideDiv.contains(collection_insideDivDate)) {
                        console.log("date match collection inside div today contains")
                        collection_insideDiv.insertAdjacentHTML('afterbegin', string)
                        collection_insideDiv.insertBefore(collection_insideDivDate, collection_insideDiv.children[0])
    
                    }
                    else {
                        console.log("date Match today not contains")
                        let divDate = document.createElement("div")
                        let stringToday = `<div class="item">
                        <div class="item-description-time display_flex">
                        <div><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year} </p></div>
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
                <div class="item-description-time display_flex">
                <div><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year}</p></div>
                </div>
                </div>`
                    divDate.innerHTML = stringToday
                    collectionInside.insertAdjacentHTML('afterbegin', string)
                    collectionInside.insertBefore(divDate, collectionInside.children[0])
                    collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                }
            }
    
            else {
                console.log(collection_insideDiv)
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
                                collection_insideDiv.insertBefore(collection_insideDivDate, collection_insideDiv.children[0])
                                collectionDiv.insertAdjacentElement("afterbegin", collection_insideDiv)
                            }
                        }
    
                        else {
                            console.log("date do not Match not collection")
                            let collectionInside = document.createElement("div")
                            collectionInside.className = "collection_inside"
                            let divDate = document.createElement("div")
                            divDate.className = "divdate"
                            let stringToday = `<div class="item ">
                <div class="item-description-time display_flex">
                <div><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year}</p></div>
                </div>
                </div>`
                            divDate.innerHTML = stringToday
                            collectionInside.insertAdjacentHTML("afterbegin", string)
                            collectionInside.insertBefore(divDate, collectionInside.children[0])
                            collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                        }
                    }
                        else {
                            console.log("date do not Match not collection")
                            let collectionInside = document.createElement("div")
                            collectionInside.className = "collection_inside"
                            let divDate = document.createElement("div")
                            divDate.className = "divdate"
                            let stringToday = `<div class="item ">
                <div class="item-description-time display_flex">
                <div><p>${items[i].time.date[1]} ${items[i].time.date[0]} ${items[i].time.year}</p></div>
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
        
    else {

                let collectionInside = document.createElement("div")
                collectionInside.className = "collection_inside"
                let divDate = document.createElement("div")
                let stringToday = `<div class="item ">
<div class="noData">
<p>No data related to this income</p>
</div>
</div>`
                divDate.innerHTML = stringToday
                collectionInside.appendChild(divDate)
                // collectionInside.insertBefore(divDate, collectionInside.children[0])
                collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
            }
    

    
        }
        function addingDate() {

        }

        //adding the items to local storage
        function addItemsToLocalStorage(sno, totalIncome, id, type, desc, value, time) {
            let items = getItemsFromLocalStorage()
            sno = items.length + 1
            items.push({
                sno,
                totalIncome,
                id,
                desc,
                time,
                type,
                value
            })
            localStorage.setItem('items', JSON.stringify(items))
        }
        //getting items from local storage
        function getItemsFromLocalStorage() {
            let items = localStorage.getItem('items')
            if (items) {
                itemsArray = JSON.parse(items)
            }
            else {
                itemsArray = []
            }
            return itemsArray;
        }

        form[1].addEventListener("keyup", (e) => {
            e.preventDefault()
            if (e.keyCode == '13' && e.target.value != "") {
                e.preventDefault()
                form[2].focus()
            }
            else {
                return;
            }
        })


        function validateForm() {
            isValid = form.checkValidity();
            if (!isValid) {
                message.textContent = "please add money or expenses"
                message.style.color = "red"
                // document.querySelector("input").style.border="1px solid red"
                // document.querySelector("input").style.boxShadow="none"
            }
            else {

            }
        }
        // collectionDiv.firstChildElement=`<div>Hello</div>`
        // console.log(collectionDiv.firstChildElement)
        var taarik;
        form.addEventListener("submit", (e) => {
            showTransaction=true;
           console.log("id",currentId[currentId.length-1].id)
           id=currentId[currentId.length-1].id
            console.log("hiie")
            e.preventDefault()
            validateForm()
            const type = document.querySelector(".add-type").value
            const desc = document.querySelector(".add-description").value
            const value = document.querySelector(".add-value").value
            let sno = 1;

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
            console.log(formattedTime())
            if (desc && value.length > 0) {
                if (EwalletBalance() > 0) {
                    addItems(type, desc, value, e)
                    addItemsToLocalStorage(sno, totalIncome, id, type, desc, value, formattedTime())
                    EwalletBalance()
                    
                    setTimeout(() => {
                        resetForm(desc, value)
                    }, 700);
                }
                else {
                    if (type == '+') {
                        addItems(type, desc, value)
                        addItemsToLocalStorage(sno, totalIncome, id, type, desc, value, formattedTime())
                        EwalletBalance()
                        resetForm(desc, value)
                    }
                    else if (type == '-' && EwalletBalance() - value < 0) {
                        message.textContent = "Insufficient balance to expense"
                    }
               
                    else {
                        message.textContent = "low balance"
                    }
                }
            }
            else {
                if (value.length < 0)
                    alert("fields are empty")
            }
            function addItems(type, desc, value) {

                console.log("add items")
                let items = getItemsFromLocalStorage()
                sno = items.length + 1
                let date = formattedTime()



                let string = `<div class="item">
        <div class="item-description-time display_flex">
        <div>
        <span>${sno}</span>
        </div>
            <div class="item-description">
                <p>${desc}</p>
            </div>
            <div class="item-time">
                <p>${date.time}</p>
            </div>
            <div class="item-amount">
                <p>${type === '+' ? '<span class="income-amount">income-amount</span>' : '<span class="expense-amount">expense-amount</span>'} ${value}</p>
            </div>
        </div>
    </div>`


                let collection_insideDiv = document.querySelector(".collection .collection_inside")
                let collection_insideDivDate = document.querySelector(".divdate")
                if (items.length > 0) {
                    if (items[items.length - 1].time.date[1] == date.date[1] && items[items.length - 1].time.date[0] == date.date[0] && items[items.length - 1].time.year == date.year) {
                        if (collection_insideDiv.contains(collection_insideDivDate)) {
                            console.log("date Match today contains")
                            collection_insideDiv.insertAdjacentHTML("afterbegin", string)
                            collection_insideDiv.insertBefore(collection_insideDivDate, collection_insideDiv.children[0])
                        }
                        else {
                            console.log("date Match today not contains")
                            let divDate = document.createElement("div")
                            let stringToday = `<div class="item">
                <div class="item-description-time display_flex">
                <div><p>${date.date[1]} ${date.date[0]} ${date.year}</p></div>
                </div>
                </div>`
                            divDate.innerHTML = stringToday
                            collection_insideDiv.insertAdjacentHTML("afterbegin", string)
                            collection_insideDiv.insertBefore(divDate, collection_insideDiv.children[0])
                        }
                    }
                    else {
                        console.log("date do not Match")
                        let collectionInside = document.createElement("div")
                        collectionInside.className = "collection_inside"
                        let divDate = document.createElement("div")
                        divDate.className = "divdate"
                        let stringToday = `<div class="item ">
            <div class="item-description-time display_flex">
            <div><p>${date.date[1]} ${date.date[0]} ${date.year}</p></div>
            </div>
            </div>`
                        divDate.innerHTML = stringToday
                        collectionInside.insertAdjacentHTML("afterbegin", string)
                        collectionInside.insertBefore(divDate, collectionInside.children[0])
                        collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                    }
                }
                else {
                    let collectionInside = document.createElement("div")
                    collectionInside.className = "collection_inside"
                    let divDate = document.createElement("div")
                    divDate.className = "divdate"
                    let stringToday = `<div class="item">
        <div class="item-description-time display_flex">
        <div><p>${date.date[1]} ${date.date[0]} ${date.year}</p></div>
        </div>
        </div>`
                    divDate.innerHTML = stringToday
                    if (collectionInside.contains(divDate)) {
                        console.log("items today contains")
                        collectionInside.insertAdjacentHTML("afterbegin", string)
                    }
                    else {
                        console.log("items not today not  contains")
                        collectionInside.insertAdjacentHTML("afterbegin", string)
                        collectionInside.insertBefore(divDate, collectionInside.children[0])
                    }
                    collectionDiv.insertAdjacentElement("afterbegin", collectionInside)
                }

            }
            function resetForm(desc, value) {
                console.log("form reset")
                document.querySelector(".add-description").value = ""
                document.querySelector(".add-value").value = ""
                form[2].blur()
                form[1].focus()

                message.textContent = ""
            }
        })











