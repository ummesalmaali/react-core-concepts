import logo from './logo.svg';
import './App.css';



function App() {
  const Actors =['salman begum','shahrukh akhter','irfan khatun','bulbuli bachan','Bappa','suleman','junjuni','joya','eshita ali']
  const products =[
    {name:'Photoshop', price:'$90.99',gt:'$999'},
    {name:'illustrator', price:'$9.99',gt:'$1999'},
    {name:'PDF reader', price:'$97.99',gt:'$4678'},
    {name:'khata', price:'$20.99',gt:'$200'},
    {name:'pen', price:'$97.99',gt:'$4678'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{color:'yellow'}}>I... am... a react person!!!</h2>
        <ul>
          {
            Actors.map(actor=><li>{actor}</li>)
}
{
  products.map(product=><li>{product.name}</li>)
}
        </ul>
        <Salma name='munna' job='player'></Salma>
        <Salma name='masum' job='cricketer'></Salma>
        <Salma name='jhankar' job='developer'></Salma>
        <Product product= {products[0]}></Product>
        <Product product= {products[1]}></Product>
        <Product product= {products[2]}></Product>
        <Product product= {products[3]}></Product>
        <Product product= {products[4]}></Product>
      </header>
    </div>
  );
}
function Product(props) {
  var productStyle = {
    margin:'10px',
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    height: '300px',
    width: '400px',
    color:'blue'
  }
  return (
    <div style={productStyle}>
      <h5>Name:{props.product.name}</h5>
      <h2>cost:{props.product.price}</h2>
      <h2>most:{props.product.gt}</h2>
      <button style={{borderRadius:'20px' ,width:'100px',height:'30px',backgroundColor:'green',color:'red'}}>Buy Now</button>
    </div>
  )
}
function Salma(props) {

  return (
    <div style={{ border: '5px solid red', backgroundColor: 'blue', color: 'yellow', margin: '2px', padding: '5px' }}>
      <h1>My name:{props.name}</h1>
      <h2>My kaj: {props.job}</h2>

    </div>
  )

}



export default App;
