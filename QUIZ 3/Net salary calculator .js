function calculatePAYE(grossSalary) {
    if (grossSalary <=24000) {
        return grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        return 2400 + (grossSalary - 24000) * 0.25
    } else if (grossSalary <= 500000) {
        return 2400 + 8333 * 0.25 + (grossSalary - 32333) * 0.30;
    } 
}

function calculateNHIF(grossSalary) {
    if (grossSalary <=5999) {
        return "150";
    } else if (grossSalary <= 7999) {
        return '300';
    } else if (grossSalary <=11999) {
        return '400';
    } else if (grossSalary <=14999) {
        return '500'
    }

}
function calculateNSSF(grossSalary) {
    const tier1 =Math.min (grossSalary, 7000) * 0.06;
    let tier2 = 0;
    if (grossSalary > 7000) {
        tier2 = Math.min (grossSalary - 7000, 29000) * 0.06;
    }
    return tier1 + tier2;

}
  
function calculateNetSalary (basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const NetSalary = grossSalary - (paye + nhif + nssf);
}
