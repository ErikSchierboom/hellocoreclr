import {Statusbar} from "../src/app/statusbar";

it("Statusbar should start and finish", () => {
    Statusbar.Start();
    Statusbar.Inc();
    Statusbar.Done();
});
