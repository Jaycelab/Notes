/*Task 3
Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred. Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
let first = Number(prompt('Pick a first number'));
let second = Number(prompt('Pick a second number'));
let operands = prompt('Enter an opparand (+, -, / , *)');
let result;

if (!Number.isNaN(first) && !Number.isNaN(second)) {
	switch(operands) {
		case '+': result = first + second;
			break;
		case '-': result = first - second;
			break;
		case '/': result = first / second;
			break;
		case '*': result = first * second;
			break;
		default: result = "Error: unknown operand";		
	}
} else {
	result = "Please enter a valid number"
}
alert(result)
*/

				//LAB
/*Scenario
During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.*/

// Prefer to use switch statement for excercise below
// First assign question listing to show first, last or create. 
//Second assign last to point to last contact
// If first, show first contact arr. If last, show last contact arr. If new create (push) to existing arr and all inputs is correct using && and ===)
let contacts = [
{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, 

{
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, 

{
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

