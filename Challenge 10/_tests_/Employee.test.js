const Employee = require("../lib/Employee");

test("creates an employee", () => {
    const e = new Employee("Lando", "1", "o.lopez92084@gmail.com");

    expect(e.name).toBe("Lando");
    expect(e.id).toBe("1");
    expect(e.email).toBe("o.lopez92084@gmail.com");

    expect(e.getName()).toBe("Lando");
    expect(e.getId()).toBe("1");
    expect(e.getEmail()).toBe("o.lopez92084@gmail.com");
    expect(e.getRole()).toBe("Employee");
});