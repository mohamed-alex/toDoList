//set the variables
var  theInput= document.querySelector('.add-task input'),
	theAddBtton = document.querySelector('.add'),
	taskContent = document.querySelector('.task-content'),
	tasksCount = document.querySelector('.task-box'),
	deleteTask = document.querySelector('.delete'),
	taskNumber = document.querySelector('.task-count span'),
	tasksCompleted = document.querySelector('.completed-tasks span'),
	noTasksMsg = document.querySelector('.no-task-massege'),
	finishAll=  document.querySelector('.finshed-all'),
	deleteAll =  document.querySelector('.delete-all');
	var allTasks = document.querySelectorAll(".task-box");	
//focus on onput
window.onload = function (){
	
	theInput.focus();
};

//adding the task
theAddBtton.onclick = function(){
	
	if(theInput.value ===''){
		swal("Here's the title!", "...and here's the text!");
		console.log('hi');
	}else{
	
var	noTasksMsg = document.querySelector('.no-task-massege');
	if(document.body.contains(document.querySelector('.no-task-massege'))){
		
		//remove task msg
		noTasksMsg.remove();
	}
	
		
		//create main span element
		let newTask = document.createElement('span');
		newTask.classList.add('task-box');
	
	//creat delete span
		let deleteTask = document.createElement('span');
		deleteTask.classList.add('delete');
	
			//add value to task box
		
		var allTasks = document.querySelectorAll('.task-box');
		
		
		//check if task already present =>don`t add it
		for(var i = 0 ; i < allTasks.length ; i++){
			
			if(allTasks[i].innerHTML == theInput.value){
			
			console.log(' this task is already present')
		}else{
			
			newTask.innerHTML = theInput.value;
			console.log('you enter new differnt task');
		}
		}
		
		
		
		newTask.innerHTML = theInput.value; 
		
		//add text to delet span
	deleteTask.textContent = 'delete'; 
		
	
	
	newTask.appendChild(deleteTask);
		//add text 
	taskContent.appendChild(newTask);
		theInput.value ='';
    	
		theInput.focus();
		
		//taskNumber.innerHTML = parseInt(taskNumber.innerHTML) + 1;

		calculateTasks();
	}

}
	theInput.onkeypress = function(e){

			if(e.which == 13){
			
				
	if(theInput.value ===''){
		swal("Here's the title!", "...and here's the text!");
		console.log('hi');
	}else{
			e.preventDefault();
		
		var	noTasksMsg = document.querySelector('.no-task-massege');
		if(document.body.contains(noTasksMsg)){
			
			//remove task msg
		noTasksMsg.remove();
		}		
	
		
		//create main span element
		let newTask = document.createElement('span');
		newTask.classList.add('task-box');
	
	//creat delete span
		let deleteTask = document.createElement('span');
		deleteTask.classList.add('delete');
	
			//add value to task box
		newTask.innerHTML = theInput.value; 
		
		//add text to delet span
	deleteTask.textContent = 'delete'; 
		
	
	
	newTask.appendChild(deleteTask);
		//add text 
	taskContent.appendChild(newTask);
		theInput.value ='';
    	
		theInput.focus();
		
		//taskNumber.innerHTML = parseInt(taskNumber.innerHTML) + 1;
		
		calculateTasks(); 
			}
			}
		}
	
	
		//delete Task
	document.addEventListener('click',function(de){
		
		//delete one task
		if(de.target.className == 'delete'){
			de.target.parentNode.remove();
			
			taskNumber.innerHTML = taskNumber.innerHTML -1;
		if(taskContent.childElementCount == 0){
			
			noTaskMassege();
		}
			
			
			
			
		}
		//delete All tasks
		else if(de.target.className == 'delete-all'){
			
			
		var allTasks = document.querySelectorAll('.task-box');
			
		for(var i = 0 ; i < allTasks.length; i++){
			
			allTasks[i].remove();
			calculateTasks();
	
		}
	
		}
	})
	
// toggle class 'finished
document.addEventListener('click',function(finish){
	
	if(finish.target.classList.contains('task-box')){
		
		finish.target.classList.toggle('finished');
		calculateTasks();
	
		
	}else if(finish.target.classList.contains('finshed-all')){
		
		var allFinished =  document.querySelectorAll('.task-box');
		
		for(var i = 0 ; i < allFinished.length ; i++){
			
			allFinished[i].classList.toggle('finished');
			calculateTasks();
		}
	}
})

//function to create no task masg
function noTaskMassege(){
		var noTask = document.createElement('span');
			noTask.className = 'no-task-massege';
			noTask.appendChild(document.createTextNode('No Task Found'));
			taskContent.appendChild(noTask);
		
			taskNumber.innerHTML = 0;
}

//function to calculate tasks
	function calculateTasks() {
	
		//add num of tasks on taskNumber span
	taskNumber.innerHTML = taskContent.childElementCount;
		
		//add num of combleted tasks on taskNumber span
	tasksCompleted.innerHTML = document.querySelectorAll('.finished').length ;
}


$('.sweet').click(function(){
	//swal("Hi Mohamed", "Goooood Job",'success');
	console.log(taskContent.childElementCount)
})
