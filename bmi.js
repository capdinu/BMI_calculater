function calculateBMI() {
    var name = document.getElementById('name').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    // Input validation
    if (!name || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid inputs.";
        return;
    }
    var pounds = weight * 2.20462;
    var feet = height * 0.393701;
    var BMI = (pounds * 703) / (Math.pow(feet, 2));
    var classification;
    if (BMI < 16)
        classification = "Severe Thinness";
    else if (BMI < 17)
        classification = "Moderate Thinness";
    else if (BMI < 18.5)
        classification = "Mild Thinness";
    else if (BMI < 25)
        classification = "Normal";
    else if (BMI < 30)
        classification = "Overweight";
    else if (BMI < 35)
        classification = "Obese Class I";
    else if (BMI < 40)
        classification = "Obese Class II";
    else
        classification = "Obese Class III";
    document.getElementById('result').innerHTML = "".concat(name, ", your BMI is ").concat(BMI.toFixed(2), ". Classification: ").concat(classification);
}
