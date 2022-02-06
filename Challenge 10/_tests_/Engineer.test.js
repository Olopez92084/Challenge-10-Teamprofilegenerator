const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer", () => {
    const e = new Engineer("Al Coholic", "2", "alCoholic@fakemail.com", "alCoholic");

    expect(e.getRole()).toBe("Engineer");
});

test("github property", () => {
    const e = new Engineer("Al Coholic", "2", "alCoholic@fakemail.com", "alCoholic");

    expect(e.github).toBe("alCoholic");
});

test("github method", () => {
    const e = new Engineer("Al Coholic", "2", "alCoholic@fakemail.com", "alCoholic");

    expect(e.getGithub()).toBe("<a href=\"https://github.com/alCoholic\" target=\"_blank\" rel=\"noopener noreferrer\">alCoholic</a>");
});