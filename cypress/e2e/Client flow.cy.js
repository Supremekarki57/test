let apiResults = [];

describe("Track API responses", () => {
  const iterations = 5; // Number of times to repeat the test
  const startIndex = 5;

  //   Cypress._.times(iterations, (index) => {
  //     // Intercept and collect API results
  //     before(() => {
  //       cy.intercept("**/*", (req) => {
  //         req.continue((res) => {
  //           if (res.statusCode >= 500) {
  //             // status === 401 || status === 404 || (status >= 200 && status < 300);
  //             apiResults.push({
  //               url: req.url,
  //               method: req.method,
  //               statusCode: res.statusCode,
  //               responseBody: res.body,
  //               timestamp: new Date().toISOString(),
  //             });
  //           }
  //         });
  //       });
  //     });

  //     afterEach(() => {
  //       cy.task("writeApiResults", {
  //         results: apiResults,
  //         filename: "cypress/results_api/Subs_pay-api-results.json",
  //       });
  //       cy.task("writeApiResultsExcel", {
  //         results: apiResults,
  //         filename: "cypress/results_api/Subs_pay-api-results.xlsx",
  //       });
  //     });

  it("captures API calls", () => {
    cy.viewport(1440, 900);
    cy.visit("https://test.saharamind.com//");
    cy.wait(1500);
    // cy.contains("sign Up")
    cy.get(".text-left > .tracking-tight").click();
    cy.wait(500);
    cy.get('[placeholder="First name"]').type("TestFirstName");
    cy.get('[placeholder="Last name"]').type("TestLastName");
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(".items-end > .flex-1").type("22 ");
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    // cy.get(".space-y-5 > .w-full > :nth-child(1) > .flex-1").type(
    //   "united states",
    // );
    cy.get(".space-y-5 > .w-full > :nth-child(1) > .flex-1").type("Nepal");
    cy.get(".no-scrollbar > :nth-child(1)").click();
    // cy.get(":nth-child(2) > .flex-1").type("New York");

    cy.get(":nth-child(2) > .flex-1").type("kathmandu");
    cy.get(".no-scrollbar > .flex > span").click();
    // cy.get(".no-scrollbar > :nth-child(2) > span").click();

    // cy.get(".no-scrollbar > :nth-child(2)").click();
    cy.wait(500);

    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(".grid > :nth-child(3)").click();
    ////////////////////////////////////////////////
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(".flex-wrap.gap-4 > :nth-child(4)").click();
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);

    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    // cy.get(":nth-child(2) > .flex > .inline-flex").click();
    // cy.wait(2000);
    //10
    cy.get(".flex-wrap > :nth-child(9)").click();

    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);

    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);

    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    //16
    cy.get(".space-y-6 > .flex-col > :nth-child(2)").click();
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(3) > .text-3xl").click();
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(".flex-wrap.gap-4 > :nth-child(1)").click();
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);

    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(500);
    cy.get(":nth-child(3) > .peer").click();
    cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(4000);
    const randomNum = Math.floor(Math.random() * 100);
    const email = `sup${randomNum}@yopmail.com`;

    cy.get(":nth-child(1) > .h-11").type(email);
    cy.wait(500);
    cy.get(":nth-child(2) > .relative > .shadow-xs").type("Test@123");
    cy.get(":nth-child(3) > .relative > .shadow-xs").type("Test@123");
    cy.wait(1000);
    cy.get(".bg-primary > .inline-flex").click();
    // cy.get(":nth-child(2) > .flex > .inline-flex").click();
    cy.wait(20000);

    // cy.get(".space-y-3 > .flex")
    cy.get(".inline-flex").click();

    ////login
    cy.get(":nth-child(1) > .h-11").type(email);
    cy.get(".shadow-xs").type("Test@123");
    // therapist check
    cy.get(".mt-10 > .flex > .inline-flex").click();
    ///
    // Prepare test data for Excel
    //   const testData = [
    //     {
    //       Username: username,
    //       Status: Pay,
    //       Timestamp: new Date().toISOString(),
    //     },
    //   ];

    // // Write test data to Excel
    //   cy.task("writeToExcel", {
    //     filePath: "cypress/results/Pay-data.xlsx",
    //     sheetName: "Subscribers",
    //     data: testData,
    //   });
    //     });
    // });
  });
});
