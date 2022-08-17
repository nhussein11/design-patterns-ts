enum Department {
    Engineering = 'engineering',
    Marketing = 'marketing',
    Accounting = 'accounting'
}

interface IEmployee {
    getDepartment(): Department;
    getSalary(): number;
    getName(): string;
}

class MarketingManager implements IEmployee {
    getDepartment(): Department {
        return Department.Marketing;
    }
    
    getSalary(): number {
        return 75000;
    }

    getName(): string {
        return 'Accounting 1';
    }
}

class SoftwareEngineeer implements IEmployee {
    getDepartment(): Department {
        return Department.Engineering;
    }

    getSalary(): number {
        return 95000;
    }

    getName(): string {
        return 'Software Engineer 1';
    }
}

class AccountingManager implements IEmployee {
    getDepartment(): Department {
        return Department.Accounting;
    }

    getSalary(): number {
        return 55000;
    }

    getName(): string {
        return 'Accounting 1';
    }
}

class OrganizationFactory {
    private _organizationName: string;
    private _employees: IEmployee[] = [];

    constructor(name: string) {
        this._organizationName = name;
    }

    public get name(): string {
        return this._organizationName;
    }

    addEmployees(employeeList: IEmployee[]) {
        this._employees = this._employees.concat(employeeList);
    }

    findEmplooye(name: string) {
        return this._employees.filter(emp => emp.getName() === name)[0].getName();
    }
}

const HBCFactory = new OrganizationFactory('HBC');
HBCFactory.addEmployees([new MarketingManager(), new SoftwareEngineeer(), new AccountingManager()])
console.log(HBCFactory.findEmplooye('Software Engineer 1'))
