import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h2>Home Component</h2>
            <p>this my home page </p>
            <Link to='/about'>Go to about page</Link>
            
            
        </>
    )
}

export default Home;

// ----------------------------------------------------

// import React from "react";

// function Home(){
//     return(
//         <>
//             <h2>Home Component</h2>
            
//         </>
//     )
// }

// export default Home;