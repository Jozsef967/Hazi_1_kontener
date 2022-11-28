function mutasd() {
    ertek = arkepzes();
    kiiras(ertek);
    console.log(ertek);
}


const arak = ["38.000Ft", "39.000Ft","40.000Ft","41.000Ft","42.000Ft","43.000Ft","45.000Ft", "46.000Ft", "47.000Ft","48.000Ft","51.000Ft",]



function kiiras(szoveg){
    var myDiv = document.createElement("div");
    myDiv.setAttribute("class","alert");
    var myText = document.createTextNode(szoveg);
    myDiv.appendChild(myText);
    var osszeg = document.getElementById("osszeg");
    osszeg.appendChild(myDiv);
}





function arkepzes() {
    kontener = parseInt(document.getElementById("kontener").value);
    telepules = parseInt(document.getElementById("telepules").value);
    


    // if(kontener==negySitt && telepules==bp19ker){
    //     return arak[5];
    // }else if(kontener==negySitt && telepules==bp18ker){
    //     return arak[1];
    // }else if(kontener==negySitt && telepules==vecses){
    //     return arak[1];
    // }else if(kontener==negySitt && telepules==gyal){
    //     return arak[1];
    // }else if(kontener==negySitt && telepules==felsopakony){
    //     return arak[0];
    // }else if(kontener==negyVegy && telepules==bp19ker){
    //     return arak[5];
    // }else if(kontener==negyVegy && telepules==bp18ker){
    //     return arak[1];
    // }else if(kontener==negyVegy && telepules==vecses){
    //     return arak[1];
    // }else if(kontener==negyVegy && telepules==gyal){
    //     return arak[1];
    // }else if(kontener==negyVegy && telepules==felsopakony){
    //     return arak[0];
    // }else if(kontener==otSitt && telepules==bp19ker){
    //     return arak[6];
    // }else if(kontener==otSitt && telepules==bp18ker){
    //     return arak[4];
    // }else if(kontener==otSitt && telepules==vecses){
    //     return arak[3];
    // }else if(kontener==otSitt && telepules==gyal){
    //     return arak[3];
    // }else if(kontener==otSitt && telepules==felsopakony){
    //     return arak[2];
    // }else if(kontener==otVegy && telepules==bp19ker){
    //     return arak[10];
    // }else if(kontener==otVegy && telepules==bp18ker){
    //     return arak[9];
    // }else if(kontener==otVegy && telepules==vecses){
    //     return arak[8];
    // }else if(kontener==otVegy && telepules==gyal){
    //     return arak[8];
    // }else if(kontener==otVegy && telepules==felsopakony){
    //     return arak[7];
    // }else if(kontener==hatSitt && telepules==bp19ker){
    //     return arak[8];
    // }else if(kontener==hatSitt && telepules==bp18ker){
    //     return arak[6];
    // }else if(kontener==hatSitt && telepules==vecses){
    //     return arak[5];
    // }else if(kontener==hatSitt && telepules==gyal){
    //     return arak[5];
    // }else if(kontener==hatSitt && telepules==felsopakony){
    //     return arak[4];
    // }                       





}



