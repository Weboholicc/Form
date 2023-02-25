function provera_parametara(contact_form){
    lozinka_prva = contact_form.lozinka.value;
    lozinka_druga = contact_form.potvrda_lozinke.value;
    ime_prezime = contact_form.ime_i_prezime.value;
    JMBG = contact_form.JMBG.value;
    k_ime = contact_form.korisnicko_ime.value;

    if(ime_prezime == '' || JMBG == '' || k_ime == '' || lozinka_prva == '' || lozinka_druga == '')
    {
        alert('Niste uneli sve parametre!');
        return false;
    }
    else
    {
        if(JMBG.toString().length != 13)
        {
            alert("JMBG nije validan!");
            return false;
        }
        else
        {

            if(k_ime.length <= 5)
            {
                alert("Korisnicko ime mora imati vise od 5 karaktera!");
                return false;
            }
            else
            {
                if(k_ime.charAt(0) != k_ime.charAt(0).toUpperCase())
                {
                    alert("Prvo slovo mora biti veliko!");
                    return false;	
                }
                else
                {
                    alert("Uspesno ste se logovali!");
                    return true;
                }
            }
        }
    }
}


function potvrda_Lozinke(){
    let prva = document.getElementById('o_lozinka');
    let druga = document.getElementById('p_lozinka');

    if(prva.value != druga.value)
    {
        prva.style.backgroundColor = "#ed0909";
        druga.style.backgroundColor = "#ed0909";
    }
    else
    {
        prva.style.backgroundColor = "#4df22c";
        druga.style.backgroundColor = "#4df22c";
    }
}
function Resetuj(){
    document.getElementById('o_lozinka').style.backgroundColor = "white";
    document.getElementById('p_lozinka').style.backgroundColor = "white";
}

  