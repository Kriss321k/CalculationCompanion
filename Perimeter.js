function Printtriout () {
    
    let Triinp1 = document.getElementById("numtriper1").value;
    let Triinp2 = document.getElementById("numtriper2").value;
    let Triinp3 = document.getElementById("numtriper3").value;
    let Outtrians = document.getElementById("outtrians");
    let tp1 = Number(Triinp1);
    let tp2 = Number(Triinp2);
    let tp3 = Number(Triinp3);
    let trians = '';

    if(tp1>0&&tp2>0&&tp3>0) {
        trians = (tp1+tp2+tp3).toFixed(2) ;
        Outtrians.innerHTML = trians;      
    }       
    else {
        trians = "Error"
        Outtrians.innerHTML = trians;
    }          
}

function Printrecout () {
    
    let Recinp1 = document.getElementById("numrecper1").value;
    let Recinp2 = document.getElementById("numrecper2").value;
    let Outrecans = document.getElementById("outrecans");
    let rp1 = Number(Recinp1);
    let rp2 = Number(Recinp2);
    let recans = '';

    if(rp1>0&&rp2>0) {
        recans = (2*(rp1+rp2)).toFixed(2) ;
        Outrecans.innerHTML = recans;      
    }       
    else {
        recans = "Error"
        Outrecans.innerHTML = recans;
    }          
}

function Printngonout () {
    
    let Ngoninp = document.getElementById("numngonper").value;
    let Ngonside = document.getElementById("numngon").value;
    let Outngonans = document.getElementById("outngonans");
    let x = Number(Ngoninp);
    let n = Number(Ngonside);
    let ngonans = '';

    if(x>0&&n>4&&(n%2==0)) {
        ngonans = (n*x).toFixed(2) ;
        Outngonans.innerHTML = ngonans;      
    }       
    else {
        ngonans = "Error"
        Outngonans.innerHTML = ngonans;
    }          
}

function Printcirout () {
    
    let Cirinp = document.getElementById("numcirper").value;
    let Outcirans = document.getElementById("outcirans");
    let cp = Number(Cirinp);
    let cirans = '';

    if(cp>0) {
        cirans = (2*(Math.PI)*cp).toFixed(2) ;
        Outcirans.innerHTML = cirans;      
    }       
    else {
        cirans = "Error"
        Outcirans.innerHTML = cirans;
    }          
}