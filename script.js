let table=document.querySelector("#myTable");
function createTable() {
    //Write your code here
	const rows=parseInt(prompt("Input number of rows"),10);
	const cols=parseInt(prompt("Input number of columns"),10);

	if(isNaN(rows)||isNaN(cols)||rows<=0||cols<=0){
		alert("Enter a valid no. of rows and cols")
		return;
	}

	 table.innerHTML = '';
	
	for(let i=0;i<rows;i++){
		let row=document.createElement("tr");
		for(let j=0;j<cols;j++){
			let cell=document.createElement("td");
			cell.innerText=`Row-${i} column-${j}`
			row.appendChild(cell)
			
		}
		table.appendChild(row)
	}

	
	
  
}
