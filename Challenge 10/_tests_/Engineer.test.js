const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer", () => {
    const e = new Engineer("Lando", "1", "o.lopez92084@gmail.com", "olopez92084");

    expect(e.getRole()).toBe("Engineer");
});

test("github property", () => {
    const e = new Engineer("Lando", "1", "o.lopez92084@gmail.com", "olopez92084");

    expect(e.github).toBe("olopez92084");
});

test("github method", () => {
    const e = new Engineer("Lando", "1", "o.lopez92084@gmail.com", "olopez92084");

    expect(e.getGithub()).toBe("<a href=\"https://github.com/olopez92084\" target=\"_blank\" rel=\"noopener noreferrer\">olopez92084</a>");
});