import React from 'react';
const Hero=({handleLogout})=>{
    return(
        <section className="hero">
            <nav>
                <h2>DOB:1/1/1999 PLACE OF BIRTH:'DEHRADUN'</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};
export default Hero;