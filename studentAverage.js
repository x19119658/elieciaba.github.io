function calculateAverage(){
    let nbrSubjects=parseInt(prompt("How many subjects do you take?"));
    let results=[];
    let sum=0
    let decision = prompt("Would you like to see your average and grades? Yes or No");
    if(decision.toLowerCase() === "yes"){
        for(i=0;i<nbrSubjects;i++){
            results[i]=parseInt(prompt("Result "+(i+1)+" is:"));
            sum+=results[i];
        }
        
        for(i=0;i<results.length;i++){
            alert("Your result for mudule "+(i+1)+" is "+results[i]+"%");
        }    
        avg=parseInt(sum/results.length);
        alert("Your overall average is: "+avg+"%");
            
        let grade=[];
        for(i=0;i<results.length;i++){
            if(results[i]<100 && results[i]>=80){
                grade[i]="Distinction";
            }
            else if(results[i]<80 && results[i]>=50){
                grade[i]="Pass";
            }
            else{
                grade[i]="Fail"
            }
        }
        for(i=0;i<grade.length;i++){
            alert("Your grade for mudule "+(i+1)+" is "+grade[i]);
        }   
    }
    else{
        alert("Thank you for your choice")
    }

}


