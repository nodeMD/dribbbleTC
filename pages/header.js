import { t, Selector } from "testcafe";

export default class Header {
  constructor() {
    const attribute = "data-site-nav-element";
    this.signInButton = Selector("a").withAttribute(attribute, "Sign in");
    this.uploadButton = Selector("a").withAttribute(attribute, "Upload");
    this.profileMenu = Selector("a").withAttribute(attribute, "User");
    this.signOutButton = Selector("a").withAttribute(attribute, "Sign Out");

    this.openSignInPage = async () => {
      await t.click(this.signInButton);
    };

    this.openUploadPage = async () => {
      await t.click(this.uploadButton);
    };

    this.signOut = async () => {
      await t.hover(this.profileMenu).click(this.signOutButton);
    };
  }
}
