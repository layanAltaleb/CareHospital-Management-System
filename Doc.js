


function AlphabeticalSorting(){
    var firstArray = document.getElementsByClassName('flex-iteam');
    var sortMe=[];
    for (var i = 0; i < firstArray.length; i++) {
        sortMe.push(firstArray[i].querySelector('.info').textContent);
    }
    sortMe.sort();
    for(var  i = 0; i < firstArray.length; i++) {
        for(var j = 0; j < sortMe.length; j++) {
            if (firstArray[i].querySelector('.info').textContent == sortMe[j]) {
                firstArray[i].style.order = j;
            
        }
    }
  
}}

function DepartmentSorting(){
    var elements = document.getElementsByClassName('flex-iteam');
    var sortMe = [];
    for (var i = 0; i < elements.length; i++) {
        sortMe.push(elements[i].querySelector('.dep').textContent);
    }
    sortMe.sort();
    for(var  i = 0; i < elements.length; i++) {
        for(var j = 0; j < sortMe.length; j++) {
            if (elements[i].querySelector('.dep').textContent == sortMe[j]) {
                elements[i].style.order = j;
            
        }
    }

    }

    
}
function DefaultSorting(){
    var elements = document.getElementsByClassName('flex-iteam');
    var sortMe = [];
    for (var i = 0; i < elements.length; i++) {
        sortMe.push(elements[i].querySelector('.order').textContent);
    }
    sortMe.sort();
    for(var  i = 0; i < elements.length; i++) {
        for(var j = 0; j < sortMe.length; j++) {
            if (elements[i].querySelector('.order').textContent == sortMe[j]) {
                elements[i].style.order = j;
            
        }
    }
    }
    
}



function sorting(sorting_value){

    if(sorting_value=="0"){
        
        DefaultSorting();
        
    }
    
    if( sorting_value=="1"){
        
        AlphabeticalSorting()
        
        

     
    }
    if(sorting_value =="2"){
        
        DepartmentSorting();
        
     
    }
    
 
}
