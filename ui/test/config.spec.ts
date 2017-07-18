import {Config} from "../src/app/config";

it("Config should initialize correctly", () => {
    const routerConfiguration = { title: "", map: jest.fn() };
    const sut = new Config();

    sut.configureRouter(routerConfiguration);

    expect(routerConfiguration.title).toBe("Hello World");
    expect(routerConfiguration.map).toHaveBeenCalled();
});
