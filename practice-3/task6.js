const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const testArgs = ['sushi', 'hiking']

let logPersonNameAndInterests = function(...interests) {
    let fullName = this.getFullName();
    console.log(fullName + ' loves: ' + interests.join(', '));
}

logPersonNameAndInterests.apply(Person, testArgs);
