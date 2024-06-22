import  React, { useEffect, useState }  from 'react'
import '../src/style.css'
import { useRef } from 'react';
function App() {
  const foucss=useRef();
const [item,setitem]=useState([]);
const [name,setname]=useState("");
const [quantity,setquantity]=useState("");
const [currentindex,addindex]=useState(-1);
useEffect(()=>{
  foucss.current.focus();

},[]);
const handle=(e)=>{
if(!(name.length>0&&quantity.length>0)){
  return;
}
else if(currentindex>=0){
const updatData=[...item];
updatData[currentindex]={items:name,quantits:quantity};
setitem(updatData);
addindex(-1);
}
else
setitem([...item,{items:name,quantits:quantity}]);
setname("");
setquantity("");


}
function deleteone(i){
  window.confirm(`you want to delete ${item[i].items}`)&&
  setitem(item.filter((items,index)=>index !==i  ));
     
 
 
    }
function edit(index){
addindex(index);
setname(item[index].items);
setquantity(item[index].quantits);



}
  return (
    <div className='app'>
        <h1>Inventory List </h1>
        <form onSubmit={(e)=>{e.preventDefault();}}>
          <input placeholder='Item name' value={name} onChange={(e)=>{setname(e.target.value)}} ref={foucss}/>
        
          <input placeholder='Item quantity' value={quantity} onChange={(e)=>{setquantity(e.target.value)}} />
   
          <button type='submit' onClick={handle} className='submit'>{currentindex<=0?"ADD":"save"}</button>
        </form>
    
           <div >
       {item.map((item,index)=>(
        <div className='output'>
        <p>{item.items}({item.quantits})</p>
        <button className='bg-black edit'onClick={()=>{edit(index)}}>Edit</button>
        <button className='x bg-danger'onClick={()=>{deleteone(index)}}>X</button>
        </div>
      
       ))}
    </div>
    </div>

 
    
  )
}

export default App