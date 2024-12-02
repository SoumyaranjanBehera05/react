
// function Button() {
//     const handleClick =()=>console.log("Ouch!");

//     const handleClick2=(name)=>console.log(`${name} stop clicking me`);

//     return(
//         <button onClick={()=> handleClick2("Soumya")}>Click me 😅</button>
//     )
// }
// export default Button



// function Button() {

//     let count = 0;

//     const handleClick = (name) => {
//         if (count < 3) {
//             count++;
//             console.log(`${name} you clicked me ${count} time's`);
//         }
//         else{
//             console.log(`${name} stop clicking me!`);
//         }
//     }

//     return (
//         <button onClick={()=>handleClick("Soumya")}>Click me 😅</button>
//     )
// }
// export default Button



function Button() {

    const handleClick = (e) => e.target.textContent = "Ouch!";

    return(
        <button onDoubleClick={(e)=>handleClick(e)}>Click me🫤</button>
    )
}
export default Button