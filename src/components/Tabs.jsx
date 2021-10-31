import React, {useState} from 'react';
import './Tabs.css';


const Tabs = (props) => {
    // const [tabcontentlist, setTabcontentlist ] = useState([])
    const [tabcontent, setTabcontent ] = useState({

        "content1": "Welcome to this tab where there is nothing much to say",
        "content2": "Cheers to checking out the second tab",
        "content3": "Welp... nothing here on tab 3, but thanks for stopping by!",

    });

    
    const tabClickone = () => {
        document.getElementById("tab-content").innerHTML = tabcontent.content1;


    }

    const tabClicktwo = () => {
        document.getElementById("tab-content").innerHTML = tabcontent.content2;

    }

    const tabClickthree = () => {
        document.getElementById("tab-content").innerHTML = tabcontent.content3;
 
    }



    return(

    <div>
        <div id="tabs-container">
            <div id="tab-1" class="tab" onClick={ tabClickone }>Tab 1</div>
            <div id="tab-2" class="tab"  onClick={ tabClicktwo }>Tab 2</div>
            <div id="tab-3" class="tab" onClick={ tabClickthree }>Tab 3</div>
        </div>
        <div id="tab-content">
            {/* {
                    tabcontentlist.map((tabcontent, i ) => {
                        return  <div key={ i }>{tabcontent}</div>
                    })              
            } */}
            {/* <p>{JSON.stringify(tabcontent)}</p> */}

        </div>




    </div>



    )

    }

export default Tabs;