
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(res => getData(res))
  
function getData (data,newArr){
    
        
        let body = document.getElementsByTagName("body")[0];
        let tbl     = document.createElement("table");
        let tblBody = document.createElement("tbody");
        
            for (let j = 0; j < data.length; j++) {
            
                    let row = document.createElement("tr");
                    row.classList.add(`class${j}`)
        
                    for (let i = 0; i < 1; i++) {
                     let cell = document.createElement("td");   
                     if(newArr==undefined){
                         let cellText = document.createTextNode(data[j].name);
                         cell.appendChild(cellText);
                        row.appendChild(cell);
                     }
                     else{
                        let cellText = document.createTextNode(newArr[j]);
                        cell.appendChild(cellText);
                       row.appendChild(cell);
                     }
            
                        
                    }
                    for (let i = 0; i < 1; i++) {
                        let cell = document.createElement("td");    
                        let cellText = document.createTextNode(data[j].website); 
                           cell.appendChild(cellText);
                           row.appendChild(cell);
                       }
                       for (let i = 0; i < 1; i++) {
                        let cell = document.createElement("td");    
                        let cellText = document.createTextNode(data[j].username); 
                           cell.appendChild(cellText);
                           row.appendChild(cell);
                       }
                       for (let i = 0; i < 1; i++) {
                        let cell = document.createElement("td");    
                        let cellText = document.createTextNode(data[j].email); 
                           cell.appendChild(cellText);
                           row.appendChild(cell);
                       }
           
        
                       
                    tblBody.appendChild(row);
                }
                let newData = data;
                
                tbl.appendChild(tblBody);
                body.appendChild(tbl);
                tbl.setAttribute("border", "2");
                document.getElementsByClassName('class0')[0]
                .addEventListener('click', function (event) {
                    alert(newData[0].address.street + " " + newData[0].address.city)
                });
                document.getElementsByClassName('class1')[0]
                .addEventListener('click', function (event) {
                    alert(newData[1].address.street + " " + newData[1].address.city)
                });
                document.getElementsByClassName('class2')[0]
                .addEventListener('click', function (event) {
                    alert(newData[2].address.street + " " + newData[2].address.city)
                });
                document.getElementsByClassName('class3')[0]
                .addEventListener('click', function (event) {
                    alert(newData[3].address.street + " " + newData[3].address.city)
                });
                document.getElementsByClassName('class4')[0]
                .addEventListener('click', function (event) {
                    alert(newData[4].address.street + " " + newData[4].address.city)
                });
                document.getElementsByClassName('class5')[0]
                .addEventListener('click', function (event) {
                    alert(newData[5].address.street + " " + newData[5].address.city)
                });
                document.getElementsByClassName('class6')[0]
                .addEventListener('click', function (event) {
                    alert(newData[6].address.street + " " + newData[6].address.city)
                });
                document.getElementsByClassName('class7')[0]
                .addEventListener('click', function (event) {
                    alert(newData[7].address.street + " " + newData[7].address.city)
                });
                document.getElementsByClassName('class8')[0]
                .addEventListener('click', function (event) {
                    alert(newData[8].address.street + " " + newData[8].address.city)
                });
                document.getElementsByClassName('class9')[0]
                .addEventListener('click', function (event) {
                    alert(newData[9].address.street + " " + newData[9].address.city)
                });
        

      let arr = [];
      arr.push(data.map(el=> el.name))
      console.log(arr[0].sort())
        document.getElementsByClassName('td')[0]
        .addEventListener('click', function (event) {
            
            
            getData(data, arr[0].sort())
        });
}
// Не получилось сделать сортировку и другое.






//  a1.addEventListener( "click" , function() {
//  })


