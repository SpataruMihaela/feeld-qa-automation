import { ensureOnDiscovery } from "../../helpers/navigation.helper";
import DiscoveryPage from "../../pages/DiscoveryPage";
import ProfilePage from "../../pages/ProfilePage";
import LikesPage from "../../pages/LikesPage";

describe("Likes", () => {
  it("E2E-04 allows a user to unlike another user's profile and remove it from Likes", async () => {
    await ensureOnDiscovery();

    await LikesPage.open();
    const alreadyLiked = await LikesPage.isProfileLiked("alex");

    if (!alreadyLiked) {
      await ensureOnDiscovery();
      await DiscoveryPage.openFirstProfile();
      await ProfilePage.isDisplayed();
      await ProfilePage.likeProfile();
      await ProfilePage.goBack();
    }

    await ensureOnDiscovery();
    await LikesPage.open();

    await LikesPage.openProfileByName("alex");

    await ProfilePage.isDisplayed();
    await ProfilePage.likeProfile();
    await ProfilePage.goBack();

    await LikesPage.waitUntilProfileNotPresent("alex");
  });
});
