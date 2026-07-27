// detector.js

const SIGNALS = {
    rpm: ["rpm", "engine speed"],

    boostActual: [
        "charge air pressure",
        "actual"
    ],

    boostTarget: [
        "charge air pressure",
        "specified"
    ],

    iat: [
        "intake air temperature"
    ],

    hpfp: [
        "fuel high pressure"
    ],

    lpfp: [
        "fuel low pressure"
    ],

    lambda: [
        "lambda",
        "equivalence ratio"
    ],

    timing: [
        "timing advance",
        "ignition timing"
    ]
};

function detectSignals(headers){

    const detected = {};

    for(const signal in SIGNALS){

        detected[signal] = null;

        for(const header of headers){

            const h = header.toLowerCase();

            const ok = SIGNALS[signal].every(word =>
                h.includes(word.toLowerCase())
            );

            if(ok){
                detected[signal] = header;
                break;
            }
        }
    }

    return detected;
}
