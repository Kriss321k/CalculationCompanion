function Printtriarea () {
    
    let Triinp1 = document.getElementById("numtriarea1").value;
    let Triinp2 = document.getElementById("numtriarea2").value;
    let Outtrians = document.getElementById("outtrians");
    let ta1 = Number(Triinp1);
    let ta2 = Number(Triinp2);
    let trians = '';

    if(ta1>0&&ta2>0) {
        trians = (0.5*ta1*ta2).toFixed(2) ;
        Outtrians.innerHTML = trians;      
    }       
    else {
        trians = "Error"
        Outtrians.innerHTML = trians;
    }          
}

function Printrecarea () {
    
    let Recinp1 = document.getElementById("numrecarea1").value;
    let Recinp2 = document.getElementById("numrecarea2").value;
    let Outrecans = document.getElementById("outrecans");
    let ra1 = Number(Recinp1);
    let ra2 = Number(Recinp2);
    let recans = '';

    if(ra1>0&&ra2>0) {
        recans = (ra1*ra2).toFixed(2) ;
        Outrecans.innerHTML = recans;      
    }       
    else {
        recans = "Error"
        Outrecans.innerHTML = recans; 
    }          
}

function Printtrpzarea () {
    
    let Trpzinp1 = document.getElementById("numtrpzarea1").value;
    let Trpzinp2 = document.getElementById("numtrpzarea2").value;
    let Trpzinp3 = document.getElementById("numtrpzarea3").value;
    let Outtrpzans = document.getElementById("outtrpzans");
    let trpza1 = Number(Trpzinp1);
    let trpza2 = Number(Trpzinp2);
    let trpza3 = Number(Trpzinp3);
    let trpzans = '';

    if(trpza1>0&&trpza2>0&&trpza3>0) {
        trpzans = (0.5*(trpza1+trpza2)*trpza3).toFixed(2) ;
        Outtrpzans.innerHTML = trpzans;      
    }       
    else {
        trpzans = "Error"
        Outtrpzans.innerHTML = trpzans; 
    }          
}

function Printngonarea () {
    
    let Ngoninp1 = document.getElementById("numngonarea1").value;
    let Ngoninp2 = document.getElementById("numngonarea2").value;
    let Ngoninp3 = document.getElementById("numngon").value;
    let Outngonans = document.getElementById("outngonans");
    let ngonx = Number(Ngoninp1);
    let ngonr = Number(Ngoninp2);
    let N      = Number(Ngoninp3);
    let ngonans = '';
    let X      = 2*Math.PI/N;
    let sinval = Math.sin(X);
    let tanval = Math.tan(X/2);

    if(ngonx>0&&ngonr>0||N%2!=0) {
        ngonans = "Error"
        Outngonans.innerHTML = ngonans; 
    }
    else if(ngonx>0&&N>4&&N%2==0) {
        ngonans = ((0.25*N*ngonx**2)/tanval).toFixed(2) ;
        Outngonans.innerHTML = ngonans;      
    }
    else if(ngonr>0&&N>4&&N%2==0)  {
        ngonans = (0.5*N*ngonr**2*sinval).toFixed(2) ;
        Outngonans.innerHTML = ngonans;
    }      
    else {
        ngonans = "Error"
        Outngonans.innerHTML = ngonans; 
    }          
}

function Printcirarea () {
    
    let Cirinp = document.getElementById("numcirarea").value;
    let Outcirans = document.getElementById("outcirans");
    let ca = Number(Cirinp);
    let cirans = '';

    if(ca>0) {
        cirans = ((Math.PI)*ca**2).toFixed(2) ;
        Outcirans.innerHTML = cirans;      
    }       
    else {
        cirans = "Error"
        Outcirans.innerHTML = cirans;
    }          
}
