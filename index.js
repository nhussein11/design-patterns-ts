/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 */
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('RealSubject: Handling request.');
    };
    return RealSubject;
}());
/**
 * The Proxy has an interface identical to the RealSubject.
 */
var My_Proxy = /** @class */ (function () {
    /**
     * The Proxy maintains a reference to an object of the RealSubject class. It
     * can be either lazy-loaded or passed to the Proxy by the client.
     */
    function My_Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    /**
     * The most common applications of the Proxy pattern are lazy loading,
     * caching, controlling the access, logging, etc. A Proxy can perform one of
     * these things and then, depending on the result, pass the execution to the
     * same method in a linked RealSubject object.
     */
    My_Proxy.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    My_Proxy.prototype.checkAccess = function () {
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    My_Proxy.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request.');
    };
    return My_Proxy;
}());
/**
 * The client code is supposed to work with all objects (both subjects and
 * proxies) via the Subject interface in order to support both real subjects and
 * proxies. In real life, however, clients mostly work with their real subjects
 * directly. In this case, to implement the pattern more easily, you can extend
 * your proxy from the real subject's class.
 */
function clientCode(subject) {
    // ...
    subject.request();
    // ...
}
console.log('Client: Executing the client code with a real subject:');
var realSubject = new RealSubject();
clientCode(realSubject);
console.log('');
console.log('Client: Executing the same client code with a proxy:');
var proxy = new My_Proxy(realSubject);
clientCode(proxy);
