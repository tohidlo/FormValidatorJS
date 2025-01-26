function formValidator({ form, inputName, errorClass, errorMessage }) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phonePattern = /^(09[0-9]{9})$/;

    function validateInput(input) {
        return emailPattern.test(input) || phonePattern.test(input);
    }

    var $form = $(form);
    var $input = $form.find(`input[name="${inputName}"]`);
    var $error = $form.find(errorClass);
    var inputValue = $input.val();

    $input.on('input', function () {
        var inputValue = $input.val();
        if (validateInput(inputValue)) {
            $error.text(''); 
        }
    });

    if (!validateInput(inputValue)) {
        $error.text(errorMessage); 
        return false;
    }

    $error.text(''); 
    return inputValue; 
}
