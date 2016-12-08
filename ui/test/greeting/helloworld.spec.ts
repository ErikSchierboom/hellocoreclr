"use strict";

import chai from "chai";
import {HelloWorld} from "../../src/app/greeting/helloworld";
import {SayHelloWorldResponse} from "../../src/app/greeting/sayhelloworldresponse";
import {HttpClientStub} from "../stubs";

function wait() {
    return new Promise((resolve, reject) => {
            setTimeout(resolve, 200);
        });
}

describe("HelloWorldController test suite", () => {

    it("should do nothing when there is no input", () => {
        let sut = new HelloWorld(HttpClientStub.ok());
        sut.inputText = undefined;
        sut.greetingText = "Hello";

        sut.submit();

        chai.expect(sut.greetingText).to.empty;
    });

    it("should handle a valid response", async () => {
        let res = new SayHelloWorldResponse();
        res.greeting = "Hello World!";
        let httpStub = HttpClientStub.ok(res);
        let sut = new HelloWorld(httpStub);
        sut.inputText = "Hello";

        sut.submit();

        await wait();
        chai.expect(sut.greetingText).to.equal("Hello World!");
    });

    it("should handle an error response", async () => {
        let httpStub = HttpClientStub.error();
        let sut = new HelloWorld(httpStub);
        sut.inputText = "Error";
        sut.greetingText = "Hello";

        sut.submit();

        await wait();
        chai.expect(sut.greetingText).to.empty;
    });

});
