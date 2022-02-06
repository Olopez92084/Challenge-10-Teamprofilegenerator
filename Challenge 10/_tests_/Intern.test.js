const Intern = require("../lib/Intern");

test("creates an Intern", () => {
    const i = new Intern("Mike", "4", "mike@fakemail.com", "GWU");

    expect(i.getRole()).toBe("Intern");
});

test("gets school property", () => {
    const i = new Intern("Mike", "4", "mike@fakemail.com", "GWU");

    expect(i.school).toBe("GWU");
});

test("gets school method", () => {
    const i = new Intern("Mike", "4", "mike@fakemail.com", "GWU");

    expect(i.getSchool()).toBe("GWU");
});