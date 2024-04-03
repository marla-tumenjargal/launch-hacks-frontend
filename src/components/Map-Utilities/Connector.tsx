import keys from "./keys";

export class Connector {
    constructor () {}

    /**
     * This calls the server to get a map question.
     * @returns - returns map data, contains question and answer.
     */
    async getMapQuestion() {
        const payload = "http://localhost:8080/v1/trivia/map/World";

        const response = await fetch(payload);
        const data = await response.json();    
        
        return data;
    }

    /**
     * This calls the server to get new questions
     * @param amount - amount of questions to receive
     * @returns - returns questions
     */
    async getNewQuestions(amount : number) {
        const payload = "http://localhost:8080/v1/trivia/questions/new/" + amount;

        const response = await fetch(payload);
        const data = await response.json();

        return data;
    }

    /**
     * This converts an address(city for our purposes) into latitude longitude coordinates
     * @param address - city to be converted into coordinates
     * @returns = returns latitude longitude for that city
     */
    async getCoordinates(address : string) {
        
        let api: string = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        api += address + "&key=" + keys.apiKey;

        const response = await fetch(api);
        const data = await response.json();
        console.log(data.results[0].geometry.location);
        return data.results[0].geometry.location;
    }

    /**
     * Does nothing but keep
     * @returns - returns null
     */
    render() {
        return null;
    }


}