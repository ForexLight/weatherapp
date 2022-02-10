interface Wind {
    speed: number,
    deg: number
}


function getWindDirection8Corners(deg:number) {
    if (deg>=0 && deg<22.5){
        return "север";
    }else if (deg>=22.5 && deg<67.5){
        return "северо-восток";
    }else if (deg>=67.5 && deg<112.5){
        return "восток";
    }else if (deg>=112.5 && deg<157.5){
        return "юго-восток";
    }else if (deg>=157.5 && deg<202.5){
        return "юг";
    }else if (deg>=202.5 && deg<247.5){
        return "юго-запад";
    }else if (deg>=247.5 && deg<292.5){
        return "запад";
    }else if (deg>=292.5 && deg<337.5){
        return "северо-запад";
    }else if (deg>=337.5 && deg<=360){
        return "север";
    }else{
        return "Error";
    }
}


export default function getWindDirection(wind:Wind):string {

    const {speed, deg} = wind
    let windGradation
    if (speed > 0 && speed < 3){
        windGradation = 'слабый'
    }else if (speed > 3 && speed < 10){
        windGradation = 'умеренный'
    }else if (speed > 10){
        windGradation = 'сильный'
    }

    let windDirection = getWindDirection8Corners(deg)

    return `${speed.toFixed(1)} м/c ${windDirection}- ${windGradation}`
}