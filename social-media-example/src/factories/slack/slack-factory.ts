import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";
import SlackConnector from "./slack-connector";
import SlackPublisher from "./slack-publisher";


export default class FacebookFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new SlackConnector();
    }
    getPublisher(iconnector: IConnector): IPublisher {
        return new SlackPublisher(iconnector);
    }

}