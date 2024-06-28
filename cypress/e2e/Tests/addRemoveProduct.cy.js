/// <reference types="cypress" />
import login from "../Page/loginPage.cy";
const loginpage = new login();

describe("Test Suite : Login Into the Portal with valid crediential", () => {
  it("Login Into the Site", () => {
    loginpage.openUrl();
    loginpage.enterUsername();
    loginpage.enterPassword();
    loginpage.clickLoginButton();
  });
  it("Login Into the Site with Invalid crediential", () => {
    loginpage.openUrl();
    loginpage.loginValidation()
  });
});

// import Login from "../Page/loginPage.cy";
// const loginPage = new Login();

// describe("Test Cas for login and Logout", () => {
//   let testdata
//   beforeEach(function () {
//     loginPage.enterUrl();
//     cy.fixture('crediential').then( (testdata1)=> {
//       testdata = testdata1;
//     });
//   });
//   it("Login Into the Application", () => {
//     loginPage.enterEmaill(testdata.email);
//     loginPage.enterPassword(testdata.password);
//     loginPage.clickLoginButton();
//     cy.contains("Products");
//   });
//   it("Logout ", () => {
//     cy.get("#react-burger-menu-btn").click();
//     cy.get("#logout_sidebar_link").click();
//   });
// });
