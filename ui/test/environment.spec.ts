import {Environment} from "../src/app/environment";

// tslint:disable:no-unused-expression

it("Environment should initialize correctly", () => {
    const sut = new Environment({baseUrl: "api"}, "appMode");

    expect(sut.applicationMode).toBe("appMode");
    expect(sut.baseUrl).toBe("api");
    expect(sut.IsDevelopment()).toBe(false);
    expect(sut.IsStaging()).toBe(false);
    expect(sut.IsProduction()).toBe(false);
});

it("Environment should detect development", () => {
    const sut = new Environment({baseUrl: ""}, "Development");

    expect(sut.IsDevelopment()).toBe(true);
    expect(sut.IsStaging()).toBe(false);
    expect(sut.IsProduction()).toBe(false);
});

it("Environment should detect staging", () => {
    const sut = new Environment({baseUrl: ""}, "Staging");

    expect(sut.IsDevelopment()).toBe(false);
    expect(sut.IsStaging()).toBe(true);
    expect(sut.IsProduction()).toBe(false);
});

it("Environment should detect production", () => {
    const sut = new Environment({baseUrl: ""}, "Production");

    expect(sut.IsDevelopment()).toBe(false);
    expect(sut.IsStaging()).toBe(false);
    expect(sut.IsProduction()).toBe(true);
});
