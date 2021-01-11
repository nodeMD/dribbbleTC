import { t, Selector } from 'testcafe'

export default class SignInPage {
    constructor() {
        this.loginInput = Selector('#login')
        this.passwordInput = Selector('#password')
        this.signInButton = Selector('input.button').withAttribute('value', 'Sign In')

        this.signIn = async (login, password) => {
            await t
                .typeText(this.loginInput, login)
                .typeText(this.passwordInput, password)
                .click(this.signInButton)
        }
    }
}