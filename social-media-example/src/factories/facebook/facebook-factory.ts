
import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";
import FacebookConnector from "./facebook-connector";
import FacebookPublisher from "./facebook-publisher";


export default class FacebookFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new FacebookConnector();
    }
    getPublisher(iconnector: IConnector): IPublisher {
        return new FacebookPublisher(iconnector);
    }

}