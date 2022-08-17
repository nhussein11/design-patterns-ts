import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";

export default class LinkedinPublisher implements IPublisher{
    
    constructor(private iconnector:IConnector){}

    publish(content: string): void {
        //Some logic
        console.log(content)
    }

}