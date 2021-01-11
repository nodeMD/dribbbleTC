import { t, Selector } from 'testcafe'

export default class Header {
    constructor() {
        this.signInButton = Selector('#t-signin')
        this.uploadButton = Selector('#t-upld')
        this.profileMenu = Selector('#t-profile')
        this.signOutButton = Selector('li > a').withExactText('Sign Out')

        this.openSignInPage = async () => {
            await t.click(this.signInButton)
        }

        this.openUploadPage = async () => {
            await t.click(this.uploadButton)
        }

        this.signOut = async () => {
            await t
                .hover(this.profileMenu)
                .click(this.signOutButton)
        }
    }
}