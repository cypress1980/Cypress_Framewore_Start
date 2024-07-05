
class LoginPage {
constructor(){
this.url ='https://www.saucedemo.com/'
this.userName ='#user-name'
this.password ='#password'
this.loginButton='#login-button'
}
openUrl()
{
cy.visit(this.url)
}
enterUsername(){
//cy.get(this.userName).clear()
//cy.get(this.userName).type(standard_user);
cy.get(this.userName).clear().type('standard_user');
}
enterPassword() {
    //cy.get(this.password).clear()
    //cy.get(this.password).type(secret_sauce);
    cy.get(this.password).clear().type('secret_sauce')
}

clickLoginButton(){
    cy.get(this.loginButton).click()
}

loginValidation(){
    cy.get(this.userName).clear().type('standard_user11');
    cy.get(this.password).clear().type('secret_sauce22')
    cy.get(this.loginButton).click()
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')

}





}
module.exports = LoginPage













// class Login {
//   constructor() {
//     this.url =
//       "https://www.saucedemo.com/";
//   }

//   enterUrl() {
//     cy.visit(this.url);
//   }
//   enterEmaill(userName) {
//     cy.get('#user-name').type(userName)
//   }

//   enterPassword(password) {
//     cy.get('#password').type(password)
//   }

//   clickLoginButton() {
//     cy.get('#login-button').click()
//   }
// }
// module.exports = Login;
