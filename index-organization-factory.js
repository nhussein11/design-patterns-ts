var Department;
(function (Department) {
    Department["Engineering"] = "engineering";
    Department["Marketing"] = "marketing";
    Department["Accounting"] = "accounting";
})(Department || (Department = {}));
class MarketingManager {
    getDepartment() {
        return Department.Marketing;
    }
    getSalary() {
        return 75000;
    }
    getName() {
        return 'Accounting 1';
    }
}
class SoftwareEngineeer {
    getDepartment() {
        return Department.Engineering;
    }
    getSalary() {
        return 95000;
    }
    getName() {
        return 'Software Engineer 1';
    }
}
class AccountingManager {
    getDepartment() {
        return Department.Accounting;
    }
    getSalary() {
        return 55000;
    }
    getName() {
        return 'Accounting 1';
    }
}
class OrganizationFactory {
    constructor(name) {
        this._employees = [];
        this._organizationName = name;
    }
    get name() {
        return this._organizationName;
    }
    addEmployees(employeeList) {
        this._employees = this._employees.concat(employeeList);
    }
    findEmplooye(name) {
        return this._employees.filter(emp => emp.getName() === name)[0].getName();
    }
}
const HBCFactory = new OrganizationFactory('HBC');
HBCFactory.addEmployees([new MarketingManager(), new SoftwareEngineeer(), new AccountingManager()]);
console.log(HBCFactory.findEmplooye('Software Engineer 1'));
