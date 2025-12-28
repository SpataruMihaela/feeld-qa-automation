import { ensureOnDiscovery } from "../../helpers/navigation.helper";
import DiscoveryPage from "../../pages/DiscoveryPage";
import ProfilePage from "../../pages/ProfilePage";
import LikesPage from "../../pages/LikesPage";

describe("Likes", () => {
  it("E2E-03 allows a user to like another user's profile and see it listed in Likes", async () => {
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
    await LikesPage.expectProfileByName("alex");
  });
});
