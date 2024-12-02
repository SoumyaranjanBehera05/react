
function List(props) {
    // const fruits = [{ id: 1, name: "apple", calories: 95 },
    // { id: 2, name: "Orange", calories: 45 },
    // { id: 3, name: "Banana", calories: 105 },
    // { id: 4, name: "Coconut", calories: 159 },
    // { id: 5, name: "pineapple", calories: 37 }];


    // fruits.sort((a,b)=>a.name.localeCompare(b.name));//Alphabetical
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));// Reverse Alphabetical
    // fruits.sort((a,b)=>a.calories - b.calories)//Numeric order
    // fruits.sort((a,b)=>b.calories - a.calories)//Resversse Numeric order


    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}:&nbsp;
    //     <b>{fruit.calories}</b></li>)


    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits=fruits.filter(fruit=>fruit.calories>=100)

    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //     {highCalFruit.name}:&nbsp;
    //     <b>{highCalFruit.calories}</b></li>)


    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
             {item.name}:&nbsp;
             <b>{item.calories}</b></li>)

    return (<ul>{listItems}</ul>);
}
export default List