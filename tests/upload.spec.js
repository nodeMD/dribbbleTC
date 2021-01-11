import Header from '../pages/header'
import SignInPage from '../pages/signin.page'
import UploadPage from '../pages/upload.page'
import FilePage from '../pages/file.page'
import {testUser} from '../data/testData'

const header = new Header()
const signInPage = new SignInPage()
const uploadPage = new UploadPage()
const filePage = new FilePage()

fixture `Dribbble upload fixture`
    .page `https://dribbble.com`
    .beforeEach(async t => {
        await header.openSignInPage()
        await signInPage.signIn(testUser.email, testUser.password)
    })
    .afterEach(async t => {
        // clean up after the test so remove the uploaded data
        await filePage.deleteFile()
        await header.signOut()
    })

test('User is able to upload a new file', async t => {
    const title = 'Dark'
    const description = 'hello darkness my old friend'
    await header.openUploadPage()
    await uploadPage.uploadFile('../data/test.png')
    await uploadPage.fillFileDetails(title, 'photo', description)
    await uploadPage.checkNoFeedbackBox()
    await uploadPage.publishFile()
    await filePage.checkThatFileWasUploaded(title, description)
})