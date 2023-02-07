import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import val from "../cardValues";


function App(){
    return <div>
        <Header />
        <Note title={val[0].title} content={val[0].content} image={val[0].imgVal}/>
        <Note title={val[1].title} content={val[1].content} image={val[1].imgVal}/>
        <Note title={val[2].title} content={val[2].content} image={val[2].imgVal}/>

        <Footer />
    </div>
}


export default App;