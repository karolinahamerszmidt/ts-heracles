import {deduplicate} from '.'

describe("deduplicate", () => {
    it("filters out repetitive elements", () => {
        expect(deduplicate(["Karolina", "Karolina", "Jean", "Gvido"])).toEqual(["Karolina", "Jean", "Gvido"])
    })
})


