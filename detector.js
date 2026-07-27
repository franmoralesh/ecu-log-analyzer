// detector.js
// Detecta automáticamente las señales importantes del CSV

const SIGNALS = {
    rpm: [
        "Engine RPM",
        "RPM",
        "Revolutions"
    ],

    boostActual: [
        "Charge air pressure actual",
        "Boost Pressure Actual",
        "Boost Actual"
    ],

    boostTarget: [
        "Charge air pressure specified",
        "Boost Pressure Specified",
        "Boost Target"
    ],

    iat: [
        "Intake Air Temperature",
        "IAT"
    ],

    hpfp: [
        "Fuel high pressure actual",
        "Fuel Rail Pressure",
        "High Pressure Fuel"
    ],

    lpfp: [
        "Fuel low pressure actual",
        "Low Pressure Fuel"
    ],

    lambda: [
        "Lambda",
        "Fuel/Air commanded equivalence ratio"
    ],

    timing: [
        "Timing Advance",
        "Ignition Timing"
    ]
};

function detectSignals(headers){

    const detected = {};

    for(const signal in SIGNALS){

        detected[signal] = null;

        for(const possibleName of SIGNALS[signal]){

            if(headers.includes(possibleName)){

                detected[signal] = possibleName;
                break;

            }

        }

    }

    return detected;

}
