import keys from "./keys";

export class Connector {
    constructor () {}

    async getQuestion() {
        const payload = "http://localhost:8080/v1/trivia/map/Asia";

        const response = await fetch(payload);
        const data = await response.json();
    
        console.log(data.question);
        console.log(data.correct);
    
        return data;
    }

    async getCoordinates(address : string) {
        let api: string = "https://maps.googleapis.com/maps/api/geocode/json?address=";

        api += address + "&key=" + keys.apiKey;

        const response = await fetch(api);

        const data = await response.json();

        console.log(data.results[0].geometry.location);
        return data.results[0].geometry.location;
    }

    render() {
        return null;
    }


}