//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x).toFixed(6)
    document.getElementById("result").value = y
}
  
//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}

function Multiply() {
    let Mathinp = document.getElementById('mathinput');
    let Mathout = document.getElementById('mathoutput');
    number = Number(Mathinp.value);
    let Mathhtml = '';
    let i=0

    if(number!=null&&number>0) {
        while(i<=13){
            while(i<1){
            Mathhtml += '<p>';
            Mathhtml += '//////////&nbsp; Start of Line &nbsp;\\\\\\\\\\\\\\\\\\\\';
            Mathhtml += '<p>';
            Mathout.innerHTML=Mathhtml;
            i++
            }
            while(i<=12){
                if(number%1==0){
                    Mathhtml += '<p>';
                    Mathhtml += '-----&nbsp;&nbsp;&nbsp;' + number + ' x ' + i + ' = ' + (number*i) + '&nbsp;&nbsp;&nbsp;-----';
                    Mathhtml += '</p>';
                    Mathout.innerHTML=Mathhtml;
                }
                else{
                    Mathhtml += '<p>';
                    Mathhtml += '-----&nbsp;&nbsp;&nbsp;' + number + ' x ' + i + ' = ' + (number*i).toFixed(2) + '&nbsp;&nbsp;&nbsp;-----';
                    Mathhtml += '</p>';
                    Mathout.innerHTML=Mathhtml;

                }
            i++;
            }
            while(i<=13){
            Mathhtml += '<p>';
            Mathhtml += '\\\\\\\\\\\\\\\\\\\\&nbsp; End of Line &nbsp;//////////';
            Mathhtml += '<p>';
            Mathout.innerHTML=Mathhtml;
            i++
            }        
        }  
    }else{
        Mathhtml = 'Error';
        Mathout.innerHTML=Mathhtml;
    }        
}

function ResetM() {
    document.getElementById("mathinput").value = '';
    let Mathout = document.getElementById("mathoutput");

    Mathout.innerHTML = "";
}