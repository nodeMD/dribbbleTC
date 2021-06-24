import { t, Selector } from "testcafe";

export default class FilePage {
  constructor() {
    this.imageTitle = Selector("h1.shot-header-title");
    this.imageDescription = Selector(".shot-description-container p");
    this.uploadedImage = Selector("img.lazyloaded.lazyautosizes");
    this.deleteButton = Selector("a").withExactText("Delete");
    this.confirmationThatFileWasDeleted = Selector("h2").withExactText(
      "Shot will be deleted momentarily."
    );
    this.pendingPublishing = Selector(".upload-publishing-title");

    this.checkThatFileWasUploaded = async (title, description) => {
      await t
        .expect(this.pendingPublishing.exists)
        .ok()
        .expect(this.imageTitle.innerText)
        .contains(title)
        .expect(this.imageDescription.innerText)
        .contains(description)
        .expect(this.uploadedImage.exists)
        .ok();
    };

    this.deleteFile = async () => {
      await t.setNativeDialogHandler(() => true).click(this.deleteButton);
    };

    this.confirmThatFileWasDeleted = async () => {
      await t.expect(this.confirmThatFileWasDeleted.exists).ok();
    };
  }
}
