import {gmail} from "../src/index.js";


test("Testing regex gmail", () => {
    const result = gmail("akulaku1234@gmail.com")

    expect(result).toEqual(true)
})