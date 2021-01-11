import { t, Selector } from 'testcafe'

export default class UploadPage {
    constructor() {
        this.fileInput = Selector('input.drag-drop-input')
        this.titleInput = Selector('input.dd-input')
        this.descriptionInput = Selector('textarea.dd-input')
        this.tagInput = Selector('.selectize-input')
        this.tagDropdownOption = async (tagText) => Selector('.option').withExactText(tagText)
        this.noFeedbackCheckbox = Selector('input').withAttribute('type', 'checkbox')
        this.publishButton = Selector('.dd-btn > span').withExactText('Publish to Dribbble Draft')

        this.uploadFile = async (filePath) => {
            await t.setFilesToUpload(this.fileInput, filePath)
        }

        this.fillFileDetails = async (title, tag, description) => {
            await t
                .typeText(this.titleInput, title)
                .typeText(this.tagInput, tag)
                .click(await this.tagDropdownOption(tag))
                .typeText(this.descriptionInput, description)
        }

        this.checkNoFeedbackBox = async () => {
            await t.click(this.noFeedbackCheckbox)
        }

        this.publishFile = async () => {
            await t.click(this.publishButton)
        }
    }
}