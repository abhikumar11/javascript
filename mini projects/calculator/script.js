let store="";
const dis=(value)=>{
    let input=document.querySelector("#display");
    let temp=store.toString();
    if(value=="+"||value=="-"||value=="*"||value=="/"||value=="%"){
    if(temp.charAt(temp.length-1)=="+"||temp.charAt(temp.length-1)=="-"||temp.charAt(temp.length-1)=="*"||temp.charAt(temp.length-1)=="/"||temp.charAt(temp.length-1)=="%"){
        temp=temp.slice(0,temp.length-1);
        temp+=value;
        store=temp;
    }
    else{
        store+=value;
    }
}
    else{
        store+=value;
    }
    input.innerHTML=store;
}
const res=()=>{
        store=eval(store);
        let input=document.querySelector("#display");
        input.innerHTML=store;
}
const del=()=>{
        let input=document.querySelector("#display");
        store=store.slice(0,-1);
        input.innerHTML=store;
}
const clearDisplay=()=>{
        store=0;
        let input=document.querySelector("#display");
        input.innerHTML=store;
}