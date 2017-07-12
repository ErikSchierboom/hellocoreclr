import {ValidationRules} from "aurelia-validation";
import { SayHelloWorld } from "./sayhelloworld";

export class SayHelloWorldValidationRules {
    public setRules(instance: SayHelloWorld) {
        ValidationRules
            .ensure("inputText")
                .displayName("Greeting name")
                .required()
                .minLength(3)
                .maxLength(20)
                .matches(/^[\w\u00C0-\u024f]+$/)
            .on(instance);
    }
}
