
function getSwagger(){
    fetch('https://petstore.swagger.io/v2/swagger.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2><u>Swagger API End Points</u></h2><br/>';
        for (let key in data.paths) { 
            console.log(key); 
            output += `
            <div>
                <ul>
                    <li><h4>${key}</h4></li>
                </ul>
            </div>
            `;
        } 
        document.getElementById('output').innerHTML = output;
    })
}
