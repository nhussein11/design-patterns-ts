import IConnector from "./factories/connector.interface";
import IPublisher from "./factories/publisher.interface";

export default interface IAbstractFactory{
    getConnector(): IConnector;
    getPublisher(iconnector: IConnector ): IPublisher;
}