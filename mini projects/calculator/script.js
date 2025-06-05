let store="";
const dis=(value)=>{
    let input=document.querySelector("#display");
    store+=value;
    input.innerHTML=store;
}
const res=()=>{
        store=eval(store);
        let input=document.querySelector("#display");
        input.innerHTML=store;
}
const del=()=>{
        let input=document.querySelector("#display");
        store=store.slice(0,store.length-1);
        input.innerHTML=store;
}
const clear=()=>{
        let input=document.querySelector("#display");
        store="";
        input.innerHTML=store;
}