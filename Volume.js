function Printtripyrvol () {
    
    let Tripyrinp1 = document.getElementById("numtripyrvol1").value;
    let Tripyrinp2 = document.getElementById("numtripyrvol2").value;
    let Tripyrinp3 = document.getElementById("numtripyrvol3").value;
    let Outtripyrans = document.getElementById("outtripyrans");
    let tpyrv1 = Number(Tripyrinp1);
    let tpyrv2 = Number(Tripyrinp2);
    let tpyrv3 = Number(Tripyrinp3);
    let tripyrans = '';

    if(tpyrv1>0&&tpyrv2>0&&tpyrv3>0) {
        tripyrans = (1/3*0.5*tpyrv1*tpyrv2*tpyrv3).toFixed(2) ;
        Outtripyrans.innerHTML = tripyrans;      
    }       
    else {
        tripyrans = "Error"
        Outtripyrans.innerHTML = tripyrans;
    }          
}

function Printrecpyrvol () {
    
    let Recpyrinp1 = document.getElementById("numrecpyrvol1").value;
    let Recpyrinp2 = document.getElementById("numrecpyrvol2").value;
    let Recpyrinp3 = document.getElementById("numrecpyrvol3").value;
    let Outrecpyrans = document.getElementById("outrecpyrans");
    let rpyrv1 = Number(Recpyrinp1);
    let rpyrv2 = Number(Recpyrinp2);
    let rpyrv3 = Number(Recpyrinp3);
    let recpyrans = '';

    if(rpyrv1>0&&rpyrv1>0&&rpyrv1>0) {
        recpyrans = (1/3*rpyrv1*rpyrv2*rpyrv3).toFixed(2) ;
        Outrecpyrans.innerHTML = recpyrans;      
    }       
    else {
        recpyrans = "Error"
        Outrecpyrans.innerHTML = recpyrans;
    }          
}

function Printngonpyrvol () {
    
    let Ngonpyrinp1 = document.getElementById("numngonpyrvol1").value;
    let Ngonpyrinp2 = document.getElementById("numngonpyrvol2").value;
    let Ngonpyrinp3 = document.getElementById("numngon").value;
    let Ngonpyrinp4 = document.getElementById("numngonpyrvol3").value;
    let Outngonpyrans = document.getElementById("outngonpyrans");
    let ngonpx = Number(Ngonpyrinp1);
    let ngonpr = Number(Ngonpyrinp2);
    let N      = Number(Ngonpyrinp3);
    let ngonph   = Number(Ngonpyrinp4);
    let ngonpyrans = '';
    let X      = 2*Math.PI/N;
    let sinval = Math.sin(X);
    let tanval = Math.tan(X/2);

    if(ngonpx>0&&ngonpr>0&&ngonph>0||N%2!=0) {
        ngonpyrans = "Error"
        Outngonpyrans.innerHTML = ngonpyrans; 
    }
    else if(ngonpx>0&&ngonph>0&&N>4&&N%2==0) {
        ngonpyrans = (1/3*((0.25*N*ngonpx**2)/tanval)*ngonph).toFixed(2) ;
        Outngonpyrans.innerHTML = ngonpyrans;       
    }
    else if(ngonpr>0&&ngonph>0&&N>4&&N%2==0)  {
        ngonpyrans = (1/3*(0.5*N*ngonpr**2*sinval)*ngonph).toFixed(2) ;
        Outngonpyrans.innerHTML = ngonpyrans; 
    }      
    else {
        ngonpyrans = "Error"
        Outngonpyrans.innerHTML = ngonpyrans;  
    }          
}
function Printtripvol () {
    
    let Tripinp1 = document.getElementById("numtripvol1").value;
    let Tripinp2 = document.getElementById("numtripvol2").value;
    let Tripinp3 = document.getElementById("numtripvol3").value;
    let Outtripans = document.getElementById("outtripans");
    let tpv1 = Number(Tripinp1);
    let tpv2 = Number(Tripinp2);
    let tpv3 = Number(Tripinp3);
    let tripans = '';

    if(tpv1>0&&tpv2>0&&tpv3>0) {
        tripans = (0.5*tpv1*tpv2*tpv3).toFixed(2) ;
        Outtripans.innerHTML = tripans;      
    }       
    else {
        tripans = "Error"
        Outtripans.innerHTML = tripans; 
    }          
}

function Printrecpvol () {
    
    let Recpinp1 = document.getElementById("numrecpvol1").value;
    let Recpinp2 = document.getElementById("numrecpvol2").value;
    let Recpinp3 = document.getElementById("numrecpvol3").value;
    let Outrecpans = document.getElementById("outrecpans");
    let rpv1 = Number(Recpinp1);
    let rpv2 = Number(Recpinp2);
    let rpv3 = Number(Recpinp3);
    let recpans = '';

    if(rpv1>0&&rpv2>0&&rpv3>0) {
        recpans = (rpv1*rpv2*rpv3).toFixed(2) ;
        Outrecpans.innerHTML = recpans;      
    }       
    else {
        recpans = "Error"
        Outrecpans.innerHTML = recpans; 
    }          
}

function Printtrpzpvol () {
    
    let Trpzpinp1 = document.getElementById("numtrpzpvol1").value;
    let Trpzpinp2 = document.getElementById("numtrpzpvol2").value;
    let Trpzpinp3 = document.getElementById("numtrpzpvol3").value;
    let Trpzpinp4 = document.getElementById("numtrpzpvol4").value;
    let Outtrpzpans = document.getElementById("outtrpzpans");
    let trpzp1 = Number(Trpzpinp1);
    let trpzp2 = Number(Trpzpinp2);
    let trpzp3 = Number(Trpzpinp3);
    let trpzp4 = Number(Trpzpinp4);
    let trpzpans = '';

    if(trpzp1>0&&trpzp2>0&&trpzp3>0&&trpzp4>0) {
        trpzpans = (0.5*(trpzp1+trpzp2)*trpzp3*trpzp4).toFixed(2) ;
        Outtrpzpans.innerHTML = trpzpans;      
    }       
    else {
        trpzpans = "Error"
        Outtrpzpans.innerHTML = trpzpans; 
    }          
}

function Printngonpvol () {
    
    let Ngonpinp1 = document.getElementById("numngonpvol1").value;
    let Ngonpinp2 = document.getElementById("numngonpvol2").value;
    let Ngonpinp3 = document.getElementById("numngon").value;
    let Ngonpinp4 = document.getElementById("numngonpvol3").value;
    let Outngonpans = document.getElementById("outngonpans");
    let ngonpx = Number(Ngonpinp1);
    let ngonpr = Number(Ngonpinp2);
    let N      = Number(Ngonpinp3);
    let ngonpl      = Number(Ngonpinp4);
    let ngonpans = '';
    let X      = 2*Math.PI/N;
    let sinval = Math.sin(X);
    let tanval = Math.tan(X/2);

    if(ngonpx>0&&ngonpr>0&&ngonpl>0||N%2!=0) {
        ngonpans = "Error"
        Outngonpans.innerHTML = ngonpans; 
    }
    else if(ngonpx>0&&ngonpl>0&&N>4&&N%2==0) {
        ngonpans = ((0.25*N*ngonpx**2)/tanval*ngonpl).toFixed(2) ;
        Outngonpans.innerHTML = ngonpans;      
    }
    else if(ngonpr>0&&ngonpl>0&&N>4&&N%2==0)  {
        ngonpans = (0.5*N*ngonpr**2*sinval*ngonpl).toFixed(2) ;
        Outngonpans.innerHTML = ngonpans;
    }      
    else {
        ngonpans = "Error"
        Outngonpans.innerHTML = ngonpans; 
    }          
}

function Printconevol () {
    
    let Coneinp1 = document.getElementById("numconev1").value;
    let Coneinp2 = document.getElementById("numconev2").value;
    let Coneinp3 = document.getElementById("numconev3").value;
    let Outconeans = document.getElementById("outconeans");
    let coner = Number(Coneinp1);
    let coneh = Number(Coneinp2);
    let cones = Number(Coneinp3);
    let coneans = ''; 
    let cosval = coner/cones;
    let sinval = (1-cosval**2)**0.5;

    if(coner>0&&coneh>0&&cones>0) {
        coneans = "Error"
        Outconeans.innerHTML = coneans; 
    }
    else if(cones<coner&&cones>0) {
        coneans = "Not a cone"
        Outconeans.innerHTML = coneans; 
    }
    else if(coner>0&&coneh>0) {
        coneans = (1/3*(Math.PI)*coner**2*coneh).toFixed(2) ;
        Outconeans.innerHTML = coneans;      
    }
    else if(coner>0&&cones>0) {
        coneans = (1/3*(Math.PI)*coner**2*(cones*sinval)).toFixed(2) ;
        Outconeans.innerHTML = coneans; 
    }       
    else {
        coneans = "Error"
        Outconeans.innerHTML = coneans;  
    }          
}

function Printcylvol () {
    
    let Cylinp1 = document.getElementById("numcylvol1").value;
    let Cylinp2 = document.getElementById("numcylvol2").value;
    let Outcylans = document.getElementById("outcylans");
    let cylr = Number(Cylinp1);
    let cylh = Number(Cylinp2);
    let cylans = '';

    if(cylr>0&&cylh>0) {
        cylans = ((Math.PI)*cylr**2*cylh).toFixed(2) ;
        Outcylans.innerHTML = cylans;      
    }       
    else {
        cylans = "Error"
        Outcylans.innerHTML = cylans; 
    }          
}

function Printsphvol () {
    
    let Sphvinp = document.getElementById("numsphv").value;
    let Outsphvans = document.getElementById("outsphvans");
    let sphr = Number(Sphvinp);
    let Sphvans = '';

    if(sphr>0) {
        Sphvans = (4/3*(Math.PI)*sphr**3).toFixed(2) ;
        Outsphvans.innerHTML = Sphvans;      
    }       
    else {
        Sphvans = "Error"
        Outsphvans.innerHTML = Sphvans;
    }          
}
