function calculateBMI(): void {
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const weight: number = parseFloat((document.getElementById('weight') as HTMLInputElement).value);
    const height: number = parseFloat((document.getElementById('height') as HTMLInputElement).value);
  
    // Input validation
    if (!name || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      (document.getElementById('result') as HTMLElement).innerHTML = "Please enter valid inputs.";
      return;
    }
  
    const pounds: number = weight * 2.20462;
    const feet: number = height * 0.393701;
    const BMI: number = (pounds * 703) / (feet ** 2);
    let classification: string;
  
    if (BMI < 16) classification = "Severe Thinness";
    else if (BMI < 17) classification = "Moderate Thinness";
    else if (BMI < 18.5) classification = "Mild Thinness";
    else if (BMI < 25) classification = "Normal";
    else if (BMI < 30) classification = "Overweight";
    else if (BMI < 35) classification = "Obese Class I";
    else if (BMI < 40) classification = "Obese Class II";
    else classification = "Obese Class III";
    
    (document.getElementById('result') as HTMLElement).innerHTML = `${name}, your BMI is ${BMI.toFixed(2)}. Classification: ${classification}`;
  }
  