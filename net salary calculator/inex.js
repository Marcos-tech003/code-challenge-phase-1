 // Constants for tax rates and deductions (hypothetical context)
const TAX_THRESHOLD = 24000; // Taxable income threshold in your currency
const TAX_RATE_1 = 0.1; // Tax rate for income up to TAX_THRESHOLD
const TAX_RATE_2 = 0.25; // Tax rate for income above TAX_THRESHOLD

const NHIF_RATE = 0.015; // NHIF deduction rate as a decimal
const NSSF_RATE = 0.06; // NSSF deduction rate as a decimal

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate taxable income
    let taxableIncome = Math.max(grossSalary - TAX_THRESHOLD, 0);

    // Calculate Payee (Tax)
    let payee;
    if (taxableIncome <= TAX_THRESHOLD) {
        payee = taxableIncome * TAX_RATE_1;
    } else {
        let taxUpToThreshold = TAX_THRESHOLD * TAX_RATE_1;
        let taxAboveThreshold = (taxableIncome - TAX_THRESHOLD) * TAX_RATE_2;
        payee = taxUpToThreshold + taxAboveThreshold;
    }

    // Calculate NHIF deduction
    let nhifDeduction = grossSalary * NHIF_RATE;

    // Calculate NSSF deduction
    let nssfDeduction = grossSalary * NSSF_RATE;

    // Calculate net salary
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    return {
        "Gross Salary": grossSalary.toFixed(2),
        "Payee (Tax)": payee.toFixed(2),
        "NHIF Deduction": nhifDeduction.toFixed(2),
        "NSSF Deduction": nssfDeduction.toFixed(2),
        "Net Salary": netSalary.toFixed(2)
    };
}

// Example usage:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter Basic Salary: ", basicSalary => {
    readline.question("Enter Benefits: ", benefits => {
        // Convert inputs to numbers
        basicSalary = parseFloat(basicSalary);
        benefits = parseFloat(benefits);

        // Calculate salary details
        let salaryDetails = calculateNetSalary(basicSalary, benefits);

        // Display the calculated details
        console.log("\nSalary Details:");
        Object.entries(salaryDetails).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });

        readline.close();
    });
});

