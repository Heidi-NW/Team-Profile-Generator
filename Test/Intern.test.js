const Intern = require("../lib/Intern");
const intern = new Intern("Leo", "14", "leo@gmail.com", "Cool College")
describe("Intern", () => {
    describe("Test All Properties", () => {
        test("Name", () => {
            expect(intern.name).toEqual("Leo")
        })
        test("ID", () => {
            expect(intern.id).toEqual("14")
        })
        test("Email", () => {
            expect(intern.email).toEqual("leo@gmail.com")
        })
        test("School", () => {
            expect(intern.school).toEqual("Cool College")
        })
    })
})
describe("Test All Methods", () => {
    test("getName", () => {
        expect(intern.name).toEqual("Leo")
    })
    test("getID", () => {
        expect(intern.id).toEqual("14")
    })
    test("getEmail", () => {
        expect(intern.email).toEqual("leo@gmail.com")
    })
    test("getSchool", () => {
        expect(intern.school).toEqual("Cool College")
    })
})