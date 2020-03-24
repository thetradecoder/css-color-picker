import React from 'react';
import './App.css';

export default class App extends React.Component {

  componentDidMount(){
    let colorInput = document.querySelector('#color'); 
let colorName = document.querySelector('#color-name');
colorInput.addEventListener('input', ()=>{
  let color = colorInput.value;
  colorName.value = color;
  document.body.style.backgroundColor=color;
}); 

let hColorInput = document.querySelector('#h-color');
let hColorName= document.querySelector('#h-color-name');
hColorInput.addEventListener('input', ()=>{
  let color = hColorInput.value;
  hColorName.value = color;
  document.querySelector('#body-content h1').style.color=color;
});

let tColorInput = document.querySelector('#t-color');
let tColorName = document.querySelector('#t-color-name');

tColorInput.addEventListener('input', ()=>{
  let color = tColorInput.value;
  document.querySelector('#body-content p').style.color=color;
  tColorName.value=color;
})

  };

  render(){
  return (
    <div>
    <section id='sidebar-menu'>
  <div className='sidebar-menu'>
    <h1 className='text-center'>CSS Color Picker</h1>
    <div>
      <h3>Change Background</h3>
      <div className='bg-color'>
        <input type='color' id='color'/>
        <input type='text' id='color-name' />
      </div>
    </div>
    
    <div>
      <h3>Change Header color</h3>
      <div className='h-color'>
        <input type='color' id='h-color'/>
        <input type='text' id='h-color-name' />
      </div>
    </div>
    <div>
      <h3>Change Text color</h3>
      <div className='t-color'>
        <input type='color' id='t-color'/>
        <input type='text' id='t-color-name' />
      </div>
    </div>
  <div>
    <footer>
      Dev:<br/>
      Mamun Abdullah <br/>
      THE TRADE CODER

    </footer>
    </div>  
  </div>
  
</section>

<section className='body-content' id='body-content'>
  <h1> Header- Change color from the menu with color picker </h1>
  <p>Text- Change color from the menu with color picker</p>
  
</section>
</div>

  );
  }
}


