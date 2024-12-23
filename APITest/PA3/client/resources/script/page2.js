let app2 = document;
let results = [];

function handleOnLoad() {
    createCompanyTable();
    displayCompanyTable();
}

function createCompanyTable() {
    const url = "https://swapi.dev/api/people/";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network didn't respond :(");
            }
            return response.json();
        })
        .then(json => {
            results = json.results;
            displayCompanyTable(results);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
}

function displayCompanyTable(results) {
    // Create the table
    let tableContainer = document.createElement('div');
    tableContainer.style.display = 'flex';
    tableContainer.style.justifyContent = 'center';
    tableContainer.style.alignItems = 'center';
    tableContainer.style.minHeight = '65vh';

    let table = document.createElement('TABLE');
    table.border = '2';
    table.id = 'companyTable';
    let tableBody = document.createElement('TBODY');
    tableBody.id = 'companyTableBody';
    tableBody.className = "tablecolors";
    table.appendChild(tableBody);
    
    // Create header row
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);

    let th1 = document.createElement('TH');
    th1.width = 500;
    th1.appendChild(document.createTextNode('Name'));
    tr.appendChild(th1);

    let th2 = document.createElement('TH');
    th2.width = 200;
    th2.appendChild(document.createTextNode('Birthyear'));
    tr.appendChild(th2);

    let th3 = document.createElement('TH');
    th3.width = 200;
    th3.appendChild(document.createTextNode('More information'));

    tr.appendChild(th3);

    // Add data rows
    results.forEach((result) => {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);
    
        let td1 = document.createElement('TD');
        td1.width = 500;
        td1.appendChild(document.createTextNode(`${result.name}`));
        tr.appendChild(td1);
    
        let td2 = document.createElement('TD');
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${result.birth_year}`));
        tr.appendChild(td2);
    
        let td3 = document.createElement('TD');
        td3.width = 100;
        
        let button = document.createElement('button');
        button.innerText = 'More Info';
        button.style.width = '100%';
        button.addEventListener('click', function() {
            window.location.href = 'page2.html';
        });
        td3.appendChild(button);
        tr.appendChild(td3);
    });

        app.body.appendChild(table);
        tableContainer.appendChild(table);
        app.body.appendChild(tableContainer);
}

