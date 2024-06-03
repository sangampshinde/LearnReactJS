// use Location hook 

import React from "react";
import { Link,useLocation } from "react-router-dom";

function Home(){
 const location = useLocation();
 console.log(location);

    return(
        <>
            <h2>Home Component</h2>
            <p>this my home page </p>
            <Link to='/about'>Go to about page</Link>
        </>
    )
}

export default Home;
// ========================================================================================
//navigate Pogramtically 
// this use for conditional routing.

// import React from "react";
// import { Link,useNavigate } from "react-router-dom";

// function Home(){
//     const navigate = useNavigate();
//     const navToPage =(url)=>{
//         navigate(url);
//     }

//     return(
//         <>
//             <h2>Home Component</h2>
//             <p>this my home page </p>
//             <Link to='/about'>Go to about page</Link>
//             <br/>
//             <br/>
//             <button onClick={()=>{navToPage('/about')}}>Go to About Page</button>
//             <br/>
//             <br/>
//             <button onClick={()=>{navToPage('/filter')}}>Go to Filter Page</button>

//         </>
//     )
// }

// export default Home;
// ----------------------------------------------------------------------------------
// import React from "react";
// import { Link,useNavigate } from "react-router-dom";

// function Home(){
//     const navigate = useNavigate();

//     return(
//         <>
//             <h2>Home Component</h2>
//             <p>this my home page </p>
//             <Link to='/about'>Go to about page</Link>
//             <br/>
//             <br/>
//             <button onClick={()=>{navigate('/about')}}>Go to About Page</button>
//             <br/>
//             <br/>
//             <button onClick={()=>{navigate('/filetr')}}>Go to Filter Page</button>

//         </>
//     )
// }

// export default Home;
// =======================================================================================================




// import React from "react";
// import { Link } from "react-router-dom";

// function Home(){
//     return(
//         <>
//             <h2>Home Component</h2>
//             <p>this my home page </p>
//             <Link to='/about'>Go to about page</Link>
            
            
//         </>
//     )
// }

// export default Home;

// -----------------------------------------------------------------
// import React from "react";
// import { Link } from "react-router-dom";

// function Home(){
//     return(
//         <>
//             <h2>Home Component</h2>
//             <p>this my home page </p>
//             <Link to='/about'>Go to about page</Link>
            
            
//         </>
//     )
// }

// export default Home;

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