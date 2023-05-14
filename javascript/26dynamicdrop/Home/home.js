//http://3.17.216.66:4000/restaurants?stateId=1
const url = "http://3.17.216.66:4000";


const getCity = async () => {
    let response = await fetch(`${url}/location`,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')  //<option></option>
        let text = document.createTextNode(item.state) //Delhi
        element.appendChild(text)  //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element)
        //<select><option>Delhi</option></select>
    })
}

const getRest = async()=>{
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restSelect');
    while(rest.length > 0){
        rest.remove(0)
    }
    let response = await fetch(`${url}/restaurant?stateId=${cityId}`,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option')
        let text = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(text)
        rest.appendChild(element)
    })
    //console.log("><><",cityId)
}

// async function getCity(){
//     let response = await fetch(`${url}/location`,{method:'GET'})
//     let data = await response.json()
//     data.map((item) => {
//         let element = document.createElement('option')
//         let text = document.createTextNode(item.state)
//         element.appendChild(text)
//         element.value = item.state_id
//         document.getElementById('city').appendChild(element)
//     })
// }


/*
const getCity = () => {
    fetch(`${url}/location`,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option') //<option></option>
            let text = document.createTextNode(item.state) //Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = item.state_id //<option value="1">Delhi</option>
            document.getElementById('city').appendChild(element)
            //<select><option>Delhi</option></select>
        })
    })
}*/