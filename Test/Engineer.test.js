const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Mike", "10", "mike@gmail.com", "mikeGH")
describe("Engineer", () => {
    describe("Test All Properties", () => {
        test("Name", () =>{
            expect(engineer.name).toEqual("Mike")
        })
        test("ID", () =>{
            expect(engineer.id).toEqual("10")
        })
        test("Email", () =>{
            expect(engineer.email).toEqual("mike@gmail.com")
        })
        test("GitHub", () =>{
            expect(engineer.github).toEqual("mikeGH")
        })
    })
})
describe("Test All Methods", () => {
    test("getName", () =>{
        expect(engineer.name).toEqual("Mike")
    })
    test("getID", () =>{
        expect(engineer.id).toEqual("10")
    })
    test("getEmail", () =>{
        expect(engineer.email).toEqual("mike@gmail.com")
    })
    test("GitHub", () =>{
        expect(engineer.github).toEqual("mikeGH")
    })
})