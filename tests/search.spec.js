import Header from '../pages/header'
import SignInPage from '../pages/signin.page'
import SearchPage from '../pages/search.page'
import {testUser} from '../data/testData'

const header = new Header()
const signInPage = new SignInPage()
const searchPage = new SearchPage()

fixture `Dribbble search fixture`
    .page `https://dribbble.com`
    .beforeEach(async t => {
        await header.openSignInPage()
        await signInPage.signIn(testUser.email, testUser.password)
    })
    .afterEach(async t => {
        await header.signOut()
    })

test('User is able to search for a dribbbles with given params', async t => {
    await searchPage.fillFilters('photo', '30E8BD', 'All Apps', 'All Shots')
    await searchPage.checkThatThereAreResults()
})