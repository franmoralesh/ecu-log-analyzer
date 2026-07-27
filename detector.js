// detector.js
// Detector inteligente de señales

const SIGNALS = {
    rpm: ["rpm", "engine speed"],
    boostActual: ["charge air pressure", "actual"],
    boostTarget: ["charge air pressure", "specified"],
    iat: ["intake air temperature"],
    hpfp: ["fuel high pressure"],
    lpfp: ["fuel low pressure"],
    lambda: ["lambda", "equivalence ratio"],
    timing: ["timing advance", "ignition timing"]
};

function detectSignals(headers){

    const detected = {};

    for(const signal in SIGNALS){

        detected[signal] = null;

        for(const header of headers){

            const text = header.toLowerCase();

            let ok = true;

            for(const word of SIGNALS[signal]){

                if(!text.includes(word.toLowerCase())){

                    ok = false;
                    break;

                }

            }

            if(ok){

                detected[signal] = header;
                break;

            }

        }

    }

    return detected;

}
