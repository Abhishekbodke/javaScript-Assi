class Appliance {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }
}

function turnOnAppliance(appliance) {
    try {
        if (appliance.isOn) {
            throw new Error(appliance.name + " is already ON");
        }

        appliance.isOn = true;

        return appliance.name + " turned ON successfully";
    }
    catch (error) {
        return error.message;
    }
    finally {
        console.log("Operation completed for " + appliance.name);
    }
}


function turnOffAppliance(appliance) {
    try {
        if (!appliance.isOn) {
            throw new Error(appliance.name + " is already OFF");
        }

        appliance.isOn = false;

        return appliance.name + " turned OFF successfully";
    }
    catch (error) {
        return error.message;
    }
    finally {
        console.log("Operation completed for " + appliance.name);
    }
}


// Create appliances
const TV = new Appliance("TV");
const Lamp = new Appliance("Lamp");
const Oven = new Appliance("Oven");


// Test
console.log(turnOnAppliance(TV));
console.log(turnOnAppliance(Lamp));
console.log(turnOnAppliance(Oven));

console.log(turnOffAppliance(TV));
console.log(turnOffAppliance(Lamp));
console.log(turnOffAppliance(Oven));

console.log(turnOffAppliance(TV));
