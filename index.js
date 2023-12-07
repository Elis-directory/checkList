const item = document.getElementById("itemForm");
const checkListItems = []; // Declare checkListItems as a const array



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


//	<form method="post" id="user_input">
//	<label>Enter item:</label>
//	<input type ="text" id="item" required maxlength="5"/>
//	<button>Submit</button>
// 	</form>