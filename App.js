
        
        const heading = React.createElement("h1",{
            className:"heading",
            key:"1"
        },"Namaste React");
        const heading2 = React.createElement("h1",{
            id:"hi",
            someprop:"someprop",
            key:"2"
        },
        "neww heading");

        const div = React.createElement("div",{
            id:"div"
        },
        [heading,heading2]);

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(div);
