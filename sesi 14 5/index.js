let products = []

let item = document.getElementById('txtItem')
let hasil = document.getElementById('hasil')
function btnSubmit(event){
    event.preventDefault();
    if (item.value === ""){
        alert('tidak boleh ada data kosong')
    }
    else {
        products.push(item.value);
        let txt = ``
        for (let i = 0; i < products.length; i++){
            txt += `${products[i]} <button type="proses" class="btn btn-primary" onclick="btnDelete(event,${i})" >Delete</button><br>`
        }
        hasil.innerHTML = txt
        item.value = ""
    }
}

function btnDelete(event, i){
    event.preventDefault();
    products.splice(i,1);
    let txt = ``;
    for (let i = 0; i < products.length; i++){
        txt += `${products[i]} <button type="proses" class="btn btn-primary" onclick="btnDelete(event,${i})" >Delete</button><br>`
    }    
    hasil.innerHTML = txt
}