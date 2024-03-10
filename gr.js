let button=document.getElementById('btn');
button.addEventListener('click',()=>{
    const s1=parseFloat(document.getElementById('s1').value);
    const s2=parseFloat(document.getElementById('s2').value);
    const s3=parseFloat(document.getElementById('s3').value);
    const s4=parseFloat(document.getElementById('s4').value);
    const s5=parseFloat(document.getElementById('s5').value);
    const s6=parseFloat(document.getElementById('s6').value);
    const res=document.getElementById('r');
    const sub1=document.getElementById('so1');
    const sub2=document.getElementById('so2');
    const sub3=document.getElementById('so3');
    const sub4=document.getElementById('so4');
    const sub5=document.getElementById('so5');
    const sub6=document.getElementById('so6');
    const ovr=document.getElementById('oo');
    let S1=false,S2=false,S3=false,S4=false,S5=false,S6=false;
    if(s1===''||isNaN(s1)||s1<0||s1>100){
        document.getElementById('s1-error').innerHTML="Provide valid marks";
    }
    else{
        document.getElementById('s1-error').innerHTML='';
        S1=true;
    }
    if(s2===''||isNaN(s2)||s2<0||s2>100){
        document.getElementById('s2-error').innerHTML="Provide valid marks";
    }
    else{
        document.getElementById('s2-error').innerHTML='';
        S2=true;
    }
    if(s3===''||isNaN(s3)||s3<0||s3>100){
        document.getElementById('s3-error').innerHTML="Provide valid marks";
    }
    else{
        document.getElementById('s3-error').innerHTML='';
        S3=true;
    }
    if(s4===''||isNaN(s4)||s4<0||s4>100){
        document.getElementById('s4-error').innerHTML="Provide valid marks";
    }
    else{
        document.getElementById('s4-error').innerHTML='';
        S4=true;
    }
    if(s5===''||isNaN(s5)||s5<0||s5>100){
        document.getElementById('s5-error').innerHTML="Provide valid marks";
    }
    else{
        document.getElementById('s5-error').innerHTML='';
        S5=true;
    }
    if(s6===''||isNaN(s6)||s6<0||s6>100){
        document.getElementById('s6-error').innerHTML="Provide valid marks";
    }
    else{
        document.getElementById('s6-error').innerHTML='';
        S6=true;
    }
    if(S1&&S2&&S3&&S4&&S5&&S6){
        const m=((s1+s2+s3+s4+s5+s6)/6).toFixed(2);
        res.innerHTML="RESULT";
        if(s1>=90){
            sub1.innerHTML="Sub_1 Grade : A+";
        }
        else if(s1>=80){
            sub1.innerHTML="Sub_1 Grade : A";
        }
        else if(s1>=70){
            sub1.innerHTML="Sub_1 Grade : B+";
        }
        else if(s1>=60){
            sub1.innerHTML="Sub_1 Grade : B";
        }
        else if(s1>=50){
            sub1.innerHTML="Sub_1 Grade : C";
        }
        else if(s1>=40){
            sub1.innerHTML="Sub_1 Grade : D";
        }
        else{
            sub1.innerHTML="Sub_1 Grade : F";
        }
        if(s2>=90){
            sub2.innerHTML="Sub_2 Grade : A+";
        }
        else if(s2>=80){
            sub2.innerHTML="Sub_2 Grade : A";
        }
        else if(s2>=70){
            sub2.innerHTML="Sub_2 Grade : B+";
        }
        else if(s2>=60){
            sub2.innerHTML="Sub_2 Grade : B";
        }
        else if(s2>=50){
            sub2.innerHTML="Sub_2 Grade : C";
        }
        else if(s2>=40){
            sub2.innerHTML="Sub_2 Grade : D";
        }
        else{
            sub2.innerHTML="Sub_2 Grade : F";
        }
        if(s3>=90){
            sub3.innerHTML="Sub_3 Grade : A+";
        }
        else if(s3>=80){
            sub3.innerHTML="Sub_3 Grade : A";
        }
        else if(s3>=70){
            sub3.innerHTML="Sub_3 Grade : B+";
        }
        else if(s3>=60){
            sub3.innerHTML="Sub_3 Grade : B";
        }
        else if(s3>=50){
            sub3.innerHTML="Sub_3 Grade : C";
        }
        else if(s3>=40){
            sub3.innerHTML="Sub_3 Grade : D";
        }
        else{
            sub3.innerHTML="Sub_3 Grade : F";
        }
        if(s4>=90){
            sub4.innerHTML="Sub_4 Grade : A+";
        }
        else if(s4>=80){
            sub4.innerHTML="Sub_4 Grade : A";
        }
        else if(s4>=70){
            sub4.innerHTML="Sub_4 Grade : B+";
        }
        else if(s4>=60){
            sub4.innerHTML="Sub_4 Grade : B";
        }
        else if(s4>=50){
            sub4.innerHTML="Sub_4 Grade : C";
        }
        else if(s4>=40){
            sub4.innerHTML="Sub_4 Grade : D";
        }
        else{
            sub4.innerHTML="Sub_4 Grade : F";
        }
        if(s5>=90){
            sub5.innerHTML="Sub_5 Grade : A+";
        }
        else if(s5>=80){
            sub5.innerHTML="Sub_5 Grade : A";
        }
        else if(s5>=70){
            sub5.innerHTML="Sub_5 Grade : B+";
        }
        else if(s5>=60){
            sub5.innerHTML="Sub_5 Grade : B";
        }
        else if(s5>=50){
            sub5.innerHTML="Sub_5 Grade : C";
        }
        else if(s5>=40){
            sub5.innerHTML="Sub_5 Grade : D";
        }
        else{
            sub5.innerHTML="Sub_5 Grade : F";
        }
        if(s6>=90){
            sub6.innerHTML="Sub_6 Grade : A+";
        }
        else if(s6>=80){
            sub6.innerHTML="Sub_6 Grade : A";
        }
        else if(s6>=70){
            sub6.innerHTML="Sub_6 Grade : B+";
        }
        else if(s6>=60){
            sub6.innerHTML="Sub_6 Grade : B";
        }
        else if(s6>=50){
            sub6.innerHTML="Sub_6 Grade : C";
        }
        else if(s6>=40){
            sub6.innerHTML="Sub_6 Grade : D";
        }
        else{
            sub6.innerHTML="Sub_6 Grade : F";
        }
        if(m>=90){
            ovr.innerHTML="OVERALL GRADE : A+";
        }
        else if(m>=80){
            ovr.innerHTML="OVERALL GRADE : A";
        }
        else if(m>=70){
            ovr.innerHTML="OVERALL GRADE : B+";
        }
        else if(m>=60){
            ovr.innerHTML="OVERALL GRADE : B";
        }
        else if(m>=50){
            ovr.innerHTML="OVERALL GRADE : C";
        }
        else if(m>=40){
            ovr.innerHTML="OVERALL GRADE : D";
        }
        else{
            ovr.innerHTML="OVERALL GRADE : F";
        }
    }
    else{
        alert('ERROR');
    }
});