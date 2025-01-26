# FormValidatorJS

**FormValidatorJS** is a lightweight and easy-to-use JavaScript library designed for quick and efficient form validation. Whether you need to validate email addresses or phone numbers, this tool has you covered with customizable error handling and a simple setup.

---

## Features

- **Email and Phone Validation:**  
  Supports validation for emails and Iranian phone numbers using regex patterns.

- **Real-Time Error Handling:**  
  Displays error messages dynamically as the user types.

- **Customizable Messages and Selectors:**  
  Easily set custom error messages and target specific input fields.

- **Lightweight and Simple:**  
  Works seamlessly with jQuery, making it perfect for small to medium-sized projects.

---

## Installation

Simply include jQuery and the `formValidator` script in your project:

```html
<script src="jquery.js"></script>
<script src="formValidator.js"></script>
```

# FormValidatorJS

FormValidatorJS is a lightweight and reliable solution for form validation. It simplifies the process of validating inputs like emails and phone numbers, without adding unnecessary complexity or large dependencies.

## Example of Usage

Here’s an example of how to set up FormValidatorJS:

```javascript
formValidator({
    form: '#myForm',              // The form selector
    inputName: 'emailOrPhone',    // Name of the input field to validate
    errorClass: '.error-message', // Selector for the error message element
    errorMessage: 'Please enter a valid email or phone number.' // Custom error message
});
