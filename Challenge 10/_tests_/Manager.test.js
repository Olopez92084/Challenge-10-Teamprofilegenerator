const Manager = require("../lib/Manager");

test("creates a Manager", () => {
    const m = new Manager("Lando", "1", "o.lopez92084@gmail.com", "1984");

    expect(m.getRole()).toBe("Manager");
});

test("gets office number property", () => {
    const m = new Manager("Lando", "1", "o.lopez92084@gmail.com", "1984");

    expect(m.officeNumber).toBe("1984");
});

test("gets office number method", () => {
    const m = new Manager("Lando", "1", "o.lopez92084@gmail.com", "1984");

    expect(m.getOfficeNumber()).toBe("1984");
});