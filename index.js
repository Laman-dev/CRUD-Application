

function validateForm(){
   
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    if(title === "" || description === ""){
        alert("please fillout all the values");
        return false;
    }
    return true
    
}

// ================****==================

function showData(){

    let dataList;
        if(localStorage.getItem("dataList") == null){
            dataList = []
        }
        else{
            dataList = JSON.parse(localStorage.getItem("dataList"))
        }

        let html = "";

        dataList.forEach(function (element, index){
            
            html+= `
            
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${index+1}. ${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <a href="#" onclick="updateData(${index})" class="btn btn-success btn-sm edit">Edit</a>
                    <a href="#" onclick="deleteData(${index})" class="btn btn-danger btn-sm delete">Delete</a>
                </div>
            </div>
            
            `
        });

        let emptyData  = document.getElementById("all-data")
        if(dataList.length !=0){
            emptyData.innerHTML = html;
        }
        else{
            emptyData.innerHTML = `<p class="text-center">Nothing to show! Add something to Above section</p>`
        }
}
 document.onload = showData()

// ================****==================

function addData(){
    
    if(validateForm() == true){

        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        
        let data = {
            title : title,
            description : description
        } 
    
        let dataList;
        if(localStorage.getItem("dataList") == null){
            dataList = []
        }
        else{
            dataList = JSON.parse(localStorage.getItem("dataList"))
        }
        
        dataList.push(data);
        localStorage.setItem("dataList", JSON.stringify(dataList));
        showData();
        
        document.getElementById("title").value = ""
        document.getElementById("description").value = ""
    }
    
}   

// ================****==================


function updateData(index){

        document.getElementById("submit-btn").style.display = "none"
        document.getElementById("update-btn").style.display = "block"

        let dataList;
        if(localStorage.getItem("dataList") == null){
            dataList = []
        }
        else{
            dataList = JSON.parse(localStorage.getItem("dataList"))
        }

        document.getElementById("title").value = dataList[index].title;
        document.getElementById("description").value = dataList[index].description;

        document.getElementById("update-btn").onclick = function (){

            if(validateForm() == true){

            dataList[index].title = document.getElementById("title").value;
            dataList[index].description = document.getElementById("description").value

            localStorage.setItem("dataList", JSON.stringify(dataList));
            showData();

            document.getElementById("title").value = "";
            document.getElementById("description").value = "";

            document.getElementById("submit-btn").style.display = "block"
            document.getElementById("update-btn").style.display = "none"
            }
        }
}

// ================****==================

function deleteData(index){

    let dataList;
    if(localStorage.getItem("dataList") == null){
        dataList = []
    }
    else{
        dataList = JSON.parse(localStorage.getItem("dataList"))
    }
    
    dataList.splice(index, 1);
    localStorage.setItem("dataList", JSON.stringify(dataList));
    showData()
}

// ================****==================
