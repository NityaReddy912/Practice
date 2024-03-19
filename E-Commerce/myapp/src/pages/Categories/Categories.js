import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Molecules/Layout/Layout";

 
function Categories() {
  const navigate = useNavigate(); 
 
  function CategoryItem({ name, imageUrl }) {
    return (
      <div
        style={{ margin: "10px", textAlign: "center" }}
        onClick={() => redirectToHomePage()}>
        <img
          src={imageUrl}
          alt={`${name} category`}
          style={{ width: "100px", height: "100px", marginBottom: "18px" }}
        />
        <p>{name}</p>
      </div>
    );
  }
  function redirectToHomePage() {
    navigate("/");
  }
  return (
    <Layout>
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h2>What are you shopping for today?</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap",fontWeight:"bold" }}>
        <CategoryItem name="Women" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc2hO4zhIp-VBO1nMwSE5nxa7Mv6omymVJQ&usqp=CAU" />
        <CategoryItem name="Men" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_JaMFesv0nyt_g9AvpbSJsi44JViTfOcaA&usqp=CAU" />
        <CategoryItem name="Kids" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIaHIYl3ndbFQCyO2q0ZIXdYMcGTeUazYzQ&usqp=CAU" />
        <CategoryItem name="Footwear" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET2aVWLZITEtzRxSWn4d2mlckAiD1BdmfCQ&usqp=CAU"/>
        <CategoryItem name="jewellery" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitSHU4ekkuCLhnljfgzrVWf6aOQAK3B7icQ&usqp=CAU"/>
        <CategoryItem name="Beauty" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooKtW-v4U8ArQ6I_j7WiIqHGl-KayjtEiIQ&usqp=CAU"/>
        <CategoryItem name='Decor' imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dtArC8D0og5UuVtzi9mr2z5Dqt_AOOen4o8JpYwzRhcMVBZxrCol_1T99yzdkeRVovU&usqp=CAU"/>
        <CategoryItem name="Home" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQSej5rghUN2qz9TURo95Cz5LxqCKboP3qQ&usqp=CAU"/>
      </div>
    </>
   </Layout>
  );
}

export default Categories;













 
// function CategoryItem({ name, imageUrl }) {
//   return (
//     <div style={{ margin: "10px", textAlign: "center" }}>
//       <img src={imageUrl} alt={`${name} category`} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
//       <p>{name}</p>
//     </div>
//   );
// }
 










//import Layout from "../../Layout/Layout";
//function Categories(){
//     return(
//         <Layout>
//         <div>
//         <h3>This page will contain details of the products when they are delivered.</h3>
//         </div>
//         </Layout>
//     )
// }
// export default Categories;

// import React from "react";
// import Footer from "../../componunts/Header/Header";
// import Header from "../../componunts/Footer/Footer";
// import Layout from "../../Layout/Layout";
// import './Categories.css'
// function Categories() {
//   return (
//     <>
//       <Footer />
//       {/* Displaying a message */}
//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <h2>What are you shopping for today?</h2>
//       </div>
 
//       {/* Displaying categories with images */}
//       <div className="text-style">
//       <div className="image-style">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi20TOaaKiALZBAAJdrcFqcb0E5GV1JGudvqKNNYO9muvxmEIwkJCr6dF67NRSeKLcqnQ&usqp=CAU" 
//         name="Women" />
//         <img src="" name="Men" imageUrl="url-to-men-image" />
//         <img src="" name="Kids" imageUrl="url-to-kids-image" />
   
//         {/* Add more categories as needed */}
//         </div>
//       </div>
//       <Header />
//     </>
//   );
// }
 
// // function CategoryItem({ name, imageUrl }) {
// //   return (
// //     <div style={{ margin: "10px", textAlign: "center" }}>
// //       <img src={imageUrl} alt={`${name} category`} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
// //       <p>{name}</p>
// //     </div>
// //   );
// // }
 
// export default Categories;