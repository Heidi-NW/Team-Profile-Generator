const Manager = require("../lib/Manager");
const manager = new Manager("Peter", "11", "peter@gmail.com", "123")
describe("Manager", () => {
    describe("Test All Properties", () => {
        test("Name", () =>{
            expect(manager.name).toEqual("Peter")
        })
        test("ID", () =>{
            expect(manager.id).toEqual("11")
        })
        test("Email", () =>{
            expect(manager.email).toEqual("peter@gmail.com")
        })
        test("OfficeNumber", () =>{
            expect(manager.officeNumber).toEqual("123")
        })
    })
})
describe("Test All Methods", () => {
    test("getName", () =>{
        expect(manager.name).toEqual("Peter")
    })
    test("getID", () =>{
        expect(manager.id).toEqual("11")
    })
    test("getEmail", () =>{
        expect(manager.email).toEqual("peter@gmail.com")
    })
    test("getOfficeNumber", () =>{
        expect(manager.officeNumber).toEqual("123")
    })
})