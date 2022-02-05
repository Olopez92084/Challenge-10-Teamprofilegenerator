const Intern = require("../lib/Intern");

test("creates an Intern", () => {
    const i = new Intern("Lando", "1", "o.lopez92084@gmail.com", "GWU");

    expect(i.getRole()).toBe("Intern");
});

test("gets school property", () => {
    const i = new Intern("Lando", "1", "o.lopez92084@gmail.com", "GWU");

    expect(i.school).toBe("GWU");
});

test("gets school method", () => {
    const i = new Intern("Lando", "1", "o.lopez92084@gmail.com", "GWU");

    expect(i.getSchool()).toBe("GWU");
});