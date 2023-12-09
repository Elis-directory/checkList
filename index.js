const item = document.getElementById("itemForm");
const generateEnabled = document.getElementById("generate");
window.jsPDF = window.jspdf.jsPDF;
const checkListItems = []; // Declare checkListItems as a const array
let currentWebPage = document.getElementById('contentToPrint').outerHTML;



item.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = item.querySelector('#newItem').value; // Declare input using const/let

    if (input.trim() !== '') { // Validate input

        checkListItems.push(input); // Push input into checkListItems
        html_to_insert = "<h1>" + input + "</h1>"
        document.getElementById('currentList').insertAdjacentHTML('beforeend', html_to_insert);

	


    } else {
        console.log('Please enter a value.'); // Provide feedback for empty input
    }
});

generateEnabled.addEventListener('click', (e) => {
            const canvas = this.document.getElementById("contentToPrint");
	   

            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(canvas).set(opt).save();
  

});


//	<form method="post" id="user_input">
//	<label>Enter item:</label>
//	<input type ="text" id="item" required maxlength="5"/>
//	<button>Submit</button>
// 	</form>