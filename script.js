// var ul = document.querySelector("ul");

var ul = document.getElementById("ToDoList");

document.getElementsByClassName("all")[0].addEventListener("click", function() {
	ul.classList.remove("hide-done");
	localStorage["task"] = document.getElementById("ToDoList").innerHTML;
});

document.getElementsByClassName("activ")[0].addEventListener("click", function() {
	ul.classList.add("hide-done");
	localStorage["task"] = document.getElementById("ToDoList").innerHTML;
});

ul.addEventListener("click", function(e) {
	if(e.target.classList.contains("task-done")) {
		e.target.parentNode.classList.toggle("done");
		localStorage["task"] = document.getElementById("ToDoList").innerHTML;
		console.log('xfgds');
	}
});

ul.addEventListener('click',(e)=>{
	if(e.target.classList.contains("more")){
		// console.log('huigsdet');
		alert (e.target.textContent);
		// document.write ("This is a warning message!");
	}
});

// ul.addEventListener("click", function(e) {
// 	if(e.target.classList.contains("remove")) {
// 		e.target.parentNode.remove();
// 		localStorage["task"] = document.getElementById("ToDoList").innerHTML;
// 	}
// });
if(localStorage.task) {
	document.getElementById("ToDoList").innerHTML = localStorage.task;
};
const text = document.getElementById("input"),
	num = document.getElementById('itemInputNum'),
	signature = document.getElementById('signature'),
	dSignature = document.getElementById('dateSignature'),
	deadLine = document.getElementById('deadLine'),
	management = document.getElementById('management'),
	notes = document.getElementById('notes');

// how to create random id in javascript
// https://stackoverflow.com/questions/6860853/generate-random-string-for-div-id

function guidGenerator() {
	var S4 = function() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	};
	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
///
document.getElementsByClassName("add")[0].addEventListener("click", function() {
	const textV = text.value,
	 numV = num.value,
	 signatureV = signature.value,
	 dSignatureV = dSignature.value,
	 deadLineV = deadLine.value,
	 managementV = management.value,
	 notesV = notes.value;

	 if (textV === ''|| numV === '' || signatureV === '' || dSignatureV === '' || deadLineV === '' || managementV === ''){
		// showFeedback('please enter valid value', 'danger');
		console.log('Please Enter value');
		
    }else{

	// const div = document.createElement('div');
	const div = document.getElementById('div');
	// div.classList.add('item','my-3','col-11');
	var template = document.getElementById("template").innerHTML = `<div class='items col-12 inline'><p class='col-12 item-name text-capitalize inline'> <span class='col-3 more'> ${textV}</span> 
	<span class='item-num col-1 more'>${numV}</span> 
	<span class = 'col-2 more'>${signatureV}</span>
	<span class = 'col-1 more'>${dSignatureV}</span>
	<span class = 'col-1 more'>${deadLineV}</span>
	<span class = 'col-1 more'>${managementV}</span>
	<span class = 'col-2 more'>${notesV}</span>
	</p>
	<button class="task-done" style="color: green">✔</button>

	</div>`;
	// template.addEventListener('click',()=>{
	// 	console.log('xs');
		
	// })
	// var template = document.getElementById("template").innerHTML.replace('text', text);
	
	// var template = document.getElementById("template");
	document.getElementById("ToDoList").innerHTML += template;
	localStorage["task"] = document.getElementById("ToDoList").innerHTML;
	text.value = '';
	num.value = '';
	signature.value = '';
	dSignature.value = '';
	deadLine.value = '';
	management.value = '';
	notes.value = '';
	}
});
// $("#localDelete").on("click", function () {
// 	localStorage.clear();
// });

// show feedback function 
function showFeedback (text,action){
    feedback.classList.add('showItem', `alert-${action}`);
    feedback.innerHTML = `<p>${text}</p>`;

    setTimeout(function (){
        feedback.classList.remove('showItem', `alert-${action}`);
    }, 3000);
}

// http://dev-test.nemikor.com/web-storage/support-test/