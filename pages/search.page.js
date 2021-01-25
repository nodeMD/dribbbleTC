import { t, Selector } from 'testcafe'

export default class SearchPage {
    constructor() {
        this.filtersButton = Selector('a.form-btn').withAttribute('data-name', 'Filters')
        this.tagInput = Selector('#tag')
        this.colorInput = Selector('#color')
        this.madeWithDropdown = Selector('.find-shots-made-with > span.btn-dropdown')
        this.downloadsDropdown = Selector('.find-shots-source-files > span.btn-dropdown')
        this.selectOption = async (option) =>  Selector('li > a').withExactText(option)
        this.resultsLinks = Selector('.shots-grid a.dribbble-link.shot-thumbnail-link')

        this.fillFilters = async (tag, color, madeOption, downloadOption) => {
            await t
                .click(this.filtersButton)
                .typeText(this.tagInput, tag)
                .typeText(this.colorInput, color)
                .click(this.madeWithDropdown)
                .click(await this.selectOption(madeOption))
                .click(this.downloadsDropdown)
                .click(await this.selectOption(downloadOption))
        }

        this.checkThatThereAreResults = async () => {
            const count = await this.resultsLinks.count
            await t.expect(count).gt(0)
        }
    }
}