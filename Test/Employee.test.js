const Employee = require("../lib/Employee");
const employee = new Employee("John", "12", "test@gmail.com")
describe("Employee", () => {
    describe("Test All Properties", () => {
        test("Name", () =>{
            expect(employee.name).toEqual("John")  
        })
        test("ID", () =>{
            expect(employee.id).toEqual("12")
        })
        test("Email", () =>{
            expect(employee.email).toEqual("test@gmail.com")
        })
    })
    describe("Test All Methods", ( ) =>{
        test("getName", () => {
            expect(employee.getName()).toEqual("John")
        })
        test("getID", () =>{
            expect(employee.getId()).toEqual("12")
        })
        test("getEmail", () =>{
            expect(employee.getEmail()).toEqual("test@gmail.com")
        })
    })
})