import { t, Selector } from "testcafe";

export default class UploadPage {
  constructor() {
    this.fileInput = Selector("input.drag-drop-input");
    this.titleInput = Selector("#title");
    this.descriptionInput = Selector("#description");
    this.tagInput = Selector("input.selectMode");
    this.tagDropdownOption = async (tagText) =>
      Selector(".option").withExactText(tagText);
    this.noFeedbackCheckbox = Selector("input").withAttribute(
      "type",
      "checkbox"
    );
    this.continueButton = Selector("button").withExactText("Continue");
    this.publishButton = Selector("button").withExactText("Publish now");

    this.uploadFile = async (filePath) => {
      await t.setFilesToUpload(this.fileInput, filePath);
    };

    this.fillFileDetails = async (title, description, tag) => {
      await t
        .typeText(this.titleInput, title)
        .typeText(this.descriptionInput, description)
        .click(this.continueButton)
        .typeText(this.tagInput, tag)
        .click(this.noFeedbackCheckbox);
    };

    this.publishFile = async () => {
      await t.click(this.publishButton);
    };
  }
}
