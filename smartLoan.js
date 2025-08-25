document.addEventListener("DOMContentLoaded",()=>{
    const btn=document.getElementById("calculateBtn");
    
    function calculateLoan(){
        const input1=parseFloat(document.getElementById("amount").value);
    const input2=parseFloat(document.getElementById("interest").value);
    const input3=parseFloat(document.getElementById("years").value);
    const input4=document.getElementById("monthly");
    const input5=document.getElementById("total");
    const input6=document.getElementById("totalInterest");
        const annual=input2/12/100;
        const year=input3*12;
        if(isNaN(annual) || isNaN(year) || isNaN(input1)){
            alert("Please enter a valid amount");
            return;
        }
        const x=Math.pow(1+annual,year);
        const monthly=(input1*annual*x)/(x-1);
        if(isFinite(monthly)){
            const total=monthly*year;
            const totalInterest=total-input1;
            animate(input4,0,monthly,1000);
            animate(input5,0,total,1000);
            animate(input6,0,totalInterest,1000);
        }else{
            alert("Invalid");
        }
    }
    
        

    
    function animate(element,start,end,duration){
       const startTime=performance.now();
        function update(currentTime){
            const elapsed=currentTime-startTime;
            const progress=Math.min(elapsed/duration,1);
            const current=start+(end-start)*progress;
            element.textContent=current.toFixed(2);
            if(progress<1){
                requestAnimationFrame(update);
            }
            

        }
        requestAnimationFrame(update);
    }
    btn.addEventListener("click",calculateLoan);

    


})
